import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';  
import { Injectable } from '@angular/core';  
import { Observable } from 'rxjs';
import { Post } from '../models/post';
  

const postsUrl = 'https://jsonplaceholder.typicode.com/posts';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    mode: 'no-cors'
  })
}

@Injectable({
  providedIn: 'root'
})

export class PostService {

  constructor(private http:HttpClient) { }

  getPosts():Observable<Post[]> {
    return this.http.get<Post[]>(`${postsUrl}`, httpOptions);
  }

  deletePost(post:Post):Observable<Post> {
    const url = `${postsUrl}/${post.id}`;
    return this.http.delete<Post>(url, httpOptions);
  }

  addPost(post:Post):Observable<Post> {
    const url = `${postsUrl}`;
    return this.http.post<Post>(url, post, httpOptions);
  }
}