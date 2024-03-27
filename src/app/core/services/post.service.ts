import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  apiURL = 'https://dev.to/api/articles';

  constructor(private httpClient: HttpClient) {}
  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.apiURL);
  }
}
