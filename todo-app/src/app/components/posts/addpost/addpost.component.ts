import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {

  @Output() addPost: EventEmitter<any> = new EventEmitter();

  title:string;
  body: string;
  userId: number;


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    const post = {
      title: this.title,
      body: this.body,
      userId: this.userId,
    }

    this.addPost.emit(post);
    this.title = '';
    this.body = '';
    this.userId = null;
  }
}
