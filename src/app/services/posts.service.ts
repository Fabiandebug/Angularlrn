import { Injectable } from '@angular/core';
import { Posts } from 'src/models/post';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }
  getpost(): Observable<Posts[]> {
    return this.http.get<Posts[]>("https://jsonplaceholder.typicode.com/posts?_limit=100");
  }
}
