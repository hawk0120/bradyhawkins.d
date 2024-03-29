// blog.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { PostComponent } from '../post/post.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';



@NgModule({
  declarations: [BlogComponent, PostComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: BlogComponent,
      },
      // setting up the router to use parameters
      { path: ':id', component: PostComponent, pathMatch: 'full'}
    ]),
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
  ],
})

export class BlogModule {}
