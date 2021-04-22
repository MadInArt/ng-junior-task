import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent implements OnInit {

  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  title:string;
  userId: number;


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    const todo = {
      title: this.title,
      userId: this.userId,
      completed: false
    }

    this.addTodo.emit(todo);
    this.title = '';
    this.userId = null;
  }

}

