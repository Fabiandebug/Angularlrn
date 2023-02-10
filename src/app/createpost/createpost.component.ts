import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent {

  title: string = '';
  body: string = '';

  @Output() addPost: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  submitForm(): void {

    const post = {
      title: this.title,
      body: this.body,
      votes: 1
    }
    this.addPost.emit(post)
    this.title = '';
    this.body = '';
  }
}
