  
// import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
// import { TodoService } from '../../../services/todo-service.service';
// import { Todo } from 'src/app/models/Todo';

// @Component({
//   selector: 'app-todoitem',
//   templateUrl: './todoitem.component.html',
//   styleUrls: ['./todoitem.component.css']
// })
// export class TodoitemComponent implements OnInit {

//   @Input() todo: Todo;
//   @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

//   constructor(private todoService:TodoService) { }

//   ngOnInit() {
//   }

//   // Set dynamic classes
//   setClasses() {
//     let classes = {
//       todo: true,
//       'is-complete': this.todo.completed
//     }
//     return classes;
//   }

//   onToggle(todo) {
//     todo.completed = !todo.completed;
//     this.todoService.markCompleted(todo).subscribe(todo => {
//       console.log("Updated Todo:", todo);
//     });
//   }

//   onDelete(todo) {
//     this.deleteTodo.emit(todo);
//   }

// }
