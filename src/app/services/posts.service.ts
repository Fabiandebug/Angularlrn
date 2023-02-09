import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }
  getpost() {
    return [
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
