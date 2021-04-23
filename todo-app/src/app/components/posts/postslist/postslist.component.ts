import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/posts-service.service';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-postslist',
  templateUrl: './postslist.component.html',
  styleUrls: ['./postslist.component.css']
})
export class PostslistComponent implements OnInit{
  panelOpenState = false;
  posts: Post[];
  formatedPosts: Post [];
  showLoader = true;  // show spinner by default

    constructor(private postService: PostService) {
      
     }
  
    ngOnInit() {
      this.postService.getPosts().subscribe(posts => {
      this.posts = posts.sort((a, b) => a.userId - b.userId);

      console.log(this.posts)

      // this.formatedPosts = Object.values(this.groupPostsById(this.posts, 'userId'));
      this.showLoader = false; // remove spinner when data is loaded
      console.log(this.formatedPosts)
      });
    }
    deletePost(post) {
      this.posts = this.posts.filter(t => t.id !== post.id);
      this.postService.deletePost(post).subscribe(() => {
        console.log("Deleted Post :", post);
      });
    }
    addPost(post) {
      this.postService.addPost(post).subscribe(t => {
        post.id = t.id;
        this.posts.push(post);
        console.log("Added Post: ", post);
      });
    }
    groupPostsById(array, property){  // Group all posts by userID
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
