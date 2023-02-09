import { Component, OnInit } from '@angular/core';
import { Posts } from '../../models/post'
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  title: string = "Fuck you bana, Umbwa wewe!!!";
  posts: Posts[] = [];

  // Dependancie injection for post data on the constructor
  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    // Dependancie injection for post data

    this.posts = this.postsService.getpost()
  }
  hidePost(post: Posts): void {
    this.posts = this.posts.filter(p => p.id !== post.id)
  }
}
