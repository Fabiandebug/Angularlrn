import { outputAst } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Posts } from 'src/models/post';
@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent {

  @Input() post: Posts;

  @Output() hidePost: EventEmitter<Posts> = new EventEmitter;



  constructor() {
    this.post = {
      id: 0,
      title: '',
      body: '',
      votes: 1
    }
  }

  ngOnInit(): void {
  }
  upvote(post: Posts) {
    post.votes += 1;
  }

  downvote(post: Posts) {
    post.votes -= 1;
  }

  hide(post: Posts): void {
    this.hidePost.emit(post);
  }
}
