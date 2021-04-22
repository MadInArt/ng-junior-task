import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';

const todosUrl = 'https://jsonplaceholder.typicode.com/todos';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    // mode: 'no-cors'
  })
}

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  constructor(private http:HttpClient) { }

  getTodos():Observable<Todo[]> {
    return this.http.get<Todo[]>(`${todosUrl}?_limit=20`);
  }

  toggleCompleted(todo:Todo):Observable<any> {
    const url = `${todosUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }

  deleteTodo(todo:Todo):Observable<Todo> {
    const url = `${todosUrl}/${todo.id}`;
    return this.http.delete<Todo>(url, httpOptions);
  }

  addTodo(todo:Todo):Observable<Todo> {
    const url = `${todosUrl}`;
    return this.http.post<Todo>(url, todo, httpOptions);
  }
}