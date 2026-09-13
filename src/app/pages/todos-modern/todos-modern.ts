import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosService } from '../../services/todos-service';
import { Todo } from '../../interfaces/todo.interface';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-todos-modern',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatSnackBarModule, MatButtonModule],
  templateUrl: './todos-modern.html',
  styleUrl: './todos-modern.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosModernComponent implements OnInit {
  private todosService = inject(TodosService);
  private _snackBar = inject(MatSnackBar);
  private dialog = inject(MatDialog);
  todos_sig = signal<Todo[]>([]);
  loading_sig = signal<boolean>(true);
  expanded_sig = signal<Record<number, boolean>>({});

  ngOnInit(): void {
    this.loadTodos();

    // creation handled in dialog
  }

  openAddDialog(event?: Event) {
    if (event) event.preventDefault();
    import('./todos-modern-dialog').then(m => {
      const dialogRef = this.dialog.open(m.TodosModernDialogComponent as any);
      dialogRef.afterClosed().subscribe((created: Todo | null) => {
        if (created) this.todos_sig.update(list => [...list, created]);
      });
    }).catch(err => console.error('Failed to open add-todo dialog', err));
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

  // no inline add; use dialog

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
