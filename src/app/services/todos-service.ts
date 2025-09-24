import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateTodoDto, Todo } from '../interfaces/todo.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private API_URL = `${environment.API_URL}/todos`;

  constructor(private http: HttpClient) { }

  findAllTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.API_URL}`);
  }

  getTodoById(id: number): Observable<Todo> {
    return this.http.get<Todo>(`${this.API_URL}/${id}`);
  }

  createTodo(todo: CreateTodoDto): Observable<Todo> {
    return this.http.post<Todo>(`${this.API_URL}`, todo);
  }

  updateTodoCompleted(id: number, completed: boolean): Observable<Todo> {
    return this.http.put<Todo>(`${this.API_URL}/${id}/completed`, { completed });
  }

  deleteTodo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${id}`);
  }
}
