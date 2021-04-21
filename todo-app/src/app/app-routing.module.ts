import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorHandlePageComponent } from './components/pages/error-handle-page/error-handle-page.component';
import { InfoPageComponent } from './components/pages/info-page/info-page.component';
import { MainPageComponent } from './components/pages/main-page/main-page.component';
import { PostsPageComponent } from './components/pages/posts-page/posts-page.component';
import { TodoPageComponent } from './components/pages/todo-page/todo-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'main' },
  { path: 'info', component: InfoPageComponent },
  { path: 'main/todo', component: TodoPageComponent },
  { path: 'main/posts',  component: PostsPageComponent },
  { path: 'main', component: MainPageComponent},
  { path: '**', component: ErrorHandlePageComponent}

];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
