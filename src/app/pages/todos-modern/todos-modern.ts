import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TodosService } from '../../services/todos-service';
import { Todo } from '../../interfaces/todo.interface';
import { debounceTime } from 'rxjs';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

interface TodoForm {
  name: FormControl<string>;
  description: FormControl<string>;
}

@Component({
  selector: 'app-todos-modern',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatSnackBarModule],
  templateUrl: './todos-modern.html',
  styleUrl: './todos-modern.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosModernComponent implements OnInit {
  private fb = inject(FormBuilder);
  private todosService = inject(TodosService);
  private _snackBar = inject(MatSnackBar);

  form!: FormGroup<TodoForm>;
  todos_sig = signal<Todo[]>([]);
  loading_sig = signal<boolean>(true);
  expanded_sig = signal<Record<number, boolean>>({});

  ngOnInit(): void {
    this.loadTodos();

    const savedDraft = localStorage.getItem('todoDraft');
    const draft = savedDraft ? JSON.parse(savedDraft) : null;

    this.form = this.fb.group<TodoForm>({
      name: this.fb.control(draft?.name || '', {
        validators: [Validators.required, Validators.maxLength(100)]
      }),
      description: this.fb.control(draft?.description || '', {
        validators: [Validators.required, Validators.maxLength(500)]
      })
    });

    this.form.valueChanges.pipe(debounceTime(300)).subscribe(value => {
      localStorage.setItem('todoDraft', JSON.stringify(value));
    });
  }

  loadTodos(): void {
    this.loading_sig.set(true);
    this.todosService.findAllTodos().subscribe({
      next: (data) => {
        this.todos_sig.set(data);
        this.expanded_sig.set({});
        this.loading_sig.set(false);
      },
      error: (err) => {
        this.loading_sig.set(false);
        console.error('Failed to load todos (modern)', err);
        const isBackendSleeping = err && (err.status === 0 || err.status === 503 || err.status === 504);
        const message = isBackendSleeping
          ? 'Failed to load todos. Is the backend sleeping maybe?'
          : 'Failed to load todos';
        this._snackBar.open(message, 'Close', { panelClass: ['snackbar-error'], duration: 10000 });
      }
    });
  }

  toggleDescription(id: number) {
    const current = this.expanded_sig();
    const next: Record<number, boolean> = { ...current };
    next[id] = !next[id];
    this.expanded_sig.set(next);
  }

  addTodo() {
    if (this.form.invalid) return;

    const { name, description } = this.form.value;
    this.form.reset();
    const tempId = Date.now();
    const optimisticTodo: Todo = {
      id: tempId,
      name: name!,
      description: description!,
      completed: false,
      createdAt: tempId.toString()
    };

    this.todos_sig.update(list => [...list, optimisticTodo]);

    this.todosService.createTodo({ name: name!, description: description!, completed: false }).subscribe({
      next: (newTodo: Todo) => {
        this.todos_sig.update(list => list.map(t => t.id === tempId ? newTodo : t));
        localStorage.removeItem('todoDraft');
      },
      error: (err) => {
        console.error('Failed to create todo', err);
        this.todos_sig.update(list => list.filter(t => t.id !== tempId));
        const isBackendSleeping = err && (err.status === 0 || err.status === 503 || err.status === 504);
        const message = isBackendSleeping
          ? 'Failed to create todo. Is the backend sleeping maybe?'
          : 'Failed to create todo';
        this._snackBar.open(message, 'Close', { panelClass: ['snackbar-error'], duration: 10000 });
      }
    });
  }

  updateTodoCompleted(todo: Todo): void {
    this.todosService.updateTodoCompleted(todo.id, !todo.completed).subscribe({
      next: (updated) => {
        if (!updated) return;
        this.todos_sig.update(list => list.map(t => t.id === updated.id ? updated : t));
      },
      error: (err) => console.error('Failed to update todo', err)
    });
  }

  deleteTodo(id: number): void {
    const todo = this.todos_sig().find(t => t.id === id);
    const confirm = window.confirm(`Delete "${todo?.name || 'this todo'}"?`);
    if (!confirm) return;
    this.todosService.deleteTodo(id).subscribe({
      next: () => {
        this.todos_sig.update(list => list.filter(t => t.id != id));
      },
      error: (err) => console.error('Failed to delete todo', err)
    });
  }
}
