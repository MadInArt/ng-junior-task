import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';  
import { Injectable } from '@angular/core';  
import { Observable } from 'rxjs';
import { Post } from '../models/post';
import { ApiService } from './api-service.service'

const postsUrl = 'https://jsonplaceholder.typicode.com/posts';

allPost: 
@Injectable({
  providedIn: 'root'
})

export class PostService {

  constructor(private http:HttpClient, private apiService : ApiService ) { }

  getPosts(): Observable<Post[]> {
    return this.apiService.get('/posts');
  }

  deletePost(post:Post) {
    const url = `${postsUrl}/${post.id}`;
    return this.http.delete<Post>(url);
  }

  addPost(post:Post) {
    const url = `${postsUrl}`;
    return this.http.post<Post>(url, post);
  }
}