import { Component, Input } from '@angular/core';
import { Posts } from 'src/app/models/post';


@Component({
  selector: 'app-postsitem',
  templateUrl: './postsitem.component.html',
  styleUrls: ['./postsitem.component.css']
})
export class PostsitemComponent  {
  @Input() post: Posts;

}
