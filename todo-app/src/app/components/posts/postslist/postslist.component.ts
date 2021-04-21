import { Component } from '@angular/core';
import { PostService } from 'src/app/services/posts-service.service';


@Component({
  selector: 'app-postslist',
  templateUrl: './postslist.component.html',
  styleUrls: ['./postslist.component.css']
})
export class PostslistComponent   {
  posts: any;  
  
  constructor(private service:PostService) {  
  }  
  
  ngOnInit() {  
    this.service.getPosts()  
      .subscribe(response => {  
        this.posts = response;  
      });  
  }  
  
  createPost(input: HTMLInputElement) {  
    let post = { title: input.value };  
    input.value = '';  
  
    this.service.createPost(post)  
      .subscribe(response => {  
        post['id'] = response.json();  
        this.posts.splice(0, 0, post);  
        console.log(response);  
      });  
  }  
  
  updatePost(post) {  
    this.service.updatePost(post)  
      .subscribe(response => {  
        console.log(response);  
      });  
  }  
  
  deletePost(post) {  
    this.service.deletePost(post.id)  
      .subscribe(response => {  
        let index = this.posts.indexOf(post);  
        this.posts.splice(index, 1);  
      });  
  }  


}
