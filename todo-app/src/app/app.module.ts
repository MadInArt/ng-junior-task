import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AngularMaterialModule } from './angular-material.module'

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/ui/navigation/navigation.component';
import { AddtodoComponent } from './components/todo/addtodo/addtodo.component';
import { TodoitemComponent } from './components/todo/todoitem/todoitem.component';
import { TodolistComponent } from './components/todo/todolist/todolist.component';
import { PostslistComponent } from './components/posts/postslist/postslist.component';
import { PostsitemComponent } from './components/posts/postsitem/postsitem.component';
import { AddpostComponent } from './components/posts/addpost/addpost.component';
import { MainPageComponent } from './components/pages/main-page/main-page.component';
import { InfoPageComponent } from './components/pages/info-page/info-page.component';
import { TodoPageComponent } from './components/pages/todo-page/todo-page.component';
import { PostsPageComponent } from './components/pages/posts-page/posts-page.component';
import { ErrorHandlePageComponent } from './components/pages/error-handle-page/error-handle-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AddtodoComponent,
    TodoitemComponent,
    TodolistComponent,
    PostslistComponent,
    PostsitemComponent,
    AddpostComponent,
    MainPageComponent,
    InfoPageComponent,
    TodoPageComponent,
    PostsPageComponent,
    ErrorHandlePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
