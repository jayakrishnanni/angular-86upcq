import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable()
export class ApiService {

  constructor(private http : HttpClient) { }
  
  getNews () {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/posts');
  }
}