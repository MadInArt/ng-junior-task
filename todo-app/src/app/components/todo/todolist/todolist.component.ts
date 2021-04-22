import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo-service.service';




@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
    panelOpenState = false;
    todos: Todo[];
    formatedTodos: Todo [];
    showLoader = true; 

    constructor(private todoService:TodoService) {
      
     }
  
    ngOnInit() {
      this.todoService.getTodos().subscribe(todos => {
        this.todos = todos;
       
        console.log(this.todos)

      this.formatedTodos = Object.values(this.groupTodosById(this.todos, 'userId'));
      this.showLoader = false;
      console.log(this.formatedTodos)
      });
    }
    deleteTodo(todo) {
      this.todos = this.todos.filter(t => t.id !== todo.id);
      this.todoService.deleteTodo(todo).subscribe(() => {
        console.log("Deleted Todo :", todo);
      });
    }
    addTodo(todo) {
      this.todoService.addTodo(todo).subscribe(t => {
        todo.id = t.id;
        this.todos.push(todo);
        console.log("Added todo: ", todo);
      });
    }
    
    onToggle(todo) {
      todo.completed = !todo.completed;
      this.todoService.toggleCompleted(todo).subscribe(todo => {
        console.log("Updated Todo:", todo);
      });
    }
    groupTodosById(array, property){
          let hash = {},
          props = property.split('.');
        for (let i = 0; i < array.length; i++) {
          let key = props.reduce(function (acc, prop) {
            return acc && acc[prop];
          }, array[i]);
          if (!hash[key]) hash[key] = [];
          hash[key].push(array[i]);
        }
        return hash;
    }
  
}
