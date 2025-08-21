import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../services/todos-service';
import { Todo } from '../../interfaces/todo.interface';
import { FormsModule } from '@angular/forms';
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
    MatListModule
  ],
  templateUrl: './todos-component.html',
  styleUrl: './todos-component.scss'
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  newTodo: Partial<Todo> = {
    name: '',
    description: '',
    completed: false
  };

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

  addTodo(): void {
    if (!this.newTodo.name || !this.newTodo.description) return;

    this.todosService.createTodo(this.newTodo as Todo).subscribe({
      next: (created) => {
        this.todos.push(created);
        this.newTodo = { name: '', description: '', completed: false };
      },
      error: (err) => console.error('Failed to create todo', err)
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
