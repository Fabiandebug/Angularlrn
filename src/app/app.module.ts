import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { BooksModule } from './books/books.module';
import { PostsComponent } from './posts/posts.component';
import { PostItemComponent } from './post-item/post-item.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PostsComponent,
    PostItemComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BooksModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
