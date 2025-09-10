import { Component, inject, OnInit } from '@angular/core';
import { TodosService } from '../../services/todos-service';
import { Todo } from '../../interfaces/todo.interface';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-todos-component',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    ReactiveFormsModule,
  ],
  templateUrl: './todos-component.html',
  styleUrl: './todos-component.scss'
})
export class TodosComponent implements OnInit {
  private fb = inject(FormBuilder);

  form = this.fb.group({
    name: this.fb.control('my first todo', { validators: [Validators.required, Validators.maxLength(100)] }),
    description: this.fb.control('Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum minus quas rem explicabo pariatur dolorum perspiciatis mollitia in atque ut, enim, impedit voluptatibus! Voluptate nemo culpa, odit molestiae tenetur placeat.', { validators: [Validators.required, Validators.maxLength(500)] })
  });
  todos: Todo[] = [];

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos(): void {
    this.todosService.findAllTodos().subscribe({
      next: (data) => this.todos = data,
      error: (err) => console.error('Failed to load todos', err)
    });
  }

  addTodo() {
    if (this.form.invalid) return;

    const { name, description } = this.form.value;

    this.todosService.createTodo({
      name: name!,
      description: description!,
      completed: false
    }).subscribe({
      next: (newTodo: Todo) => {
        console.log('Todo created:', newTodo);
        this.form.reset();
      },
      error: (err) => {
        console.error('Failed to create todo', err);
      }
    });
  }

  updateTodo(todo: Todo): void {
    this.todosService.updateTodo(todo.id, todo).subscribe({
      next: (updated) => {
        const index = this.todos.findIndex(t => t.id === updated?.id);
        if (index !== -1 && updated) this.todos[index] = updated;
      },
      error: (err) => console.error('Failed to update todo', err)
    });
  }

  deleteTodo(id: number): void {
    this.todosService.deleteTodo(id).subscribe({
      next: () => this.todos = this.todos.filter(t => t.id !== id),
      error: (err) => console.error('Failed to delete todo', err)
    });
  }
}
