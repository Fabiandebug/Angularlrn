import { Component, OnInit } from '@angular/core';
import { Posts } from '../../models/post'
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  title: string = "Angular Tutorial";
  posts: Posts[] = [];

  // Dependancie injection for post data on the constructor
  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    // Dependancie injection for post data
    this.postsService.getpost().subscribe(res => {
      for (let index = 0; index < res.length; index++) {

        const post = res[index];
        post["votes"] = 1;
      }
      this.posts = res;
    })

  }
  hidePost(post: Posts): void {
    this.posts = this.posts.filter(p => p.id !== post.id)
  }

  addPost(post: Posts): void {
    this.posts.unshift(post);
    alert(`${post.title} has been added`)

  }
}
