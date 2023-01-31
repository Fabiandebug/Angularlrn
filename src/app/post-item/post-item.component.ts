import { Component, OnInit, Input } from '@angular/core';
import { Posts } from 'src/models/post';
@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent {

  @Input() post: Posts;


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
}
