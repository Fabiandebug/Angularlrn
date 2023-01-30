import { Component, OnInit } from '@angular/core';
import { Posts } from '../../models/post'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  title: string = "Fuck you bana, Umbwa wewe!!!";
  posts: Posts[] = [];


  constructor() { }

  ngOnInit(): void {

    this.posts = [
      {
        id: 1,
        title: "My fist title",
        body: "JUst testing out",
        votes: 5
      }, {
        id: 2,
        title: "My second title",
        body: "JUst testing out",
        votes: 15
      }, {
        id: 3,
        title: "My third ost title",
        body: "JUst testing post out",
        votes: 1
      }, {
        id: 4,
        title: "My fifth title post",
        body: "JUst testing out",
        votes: 3
      },
      {
        id: 5,
        title: "My 6th post title",
        body: "Just testing out the post",
        votes: 7
      }
    ];
  }

}
