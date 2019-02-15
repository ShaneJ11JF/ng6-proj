import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  
  //Getting all users 
  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }

  //Getting a specific user based on userId
  getUser(userId) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+userId)
  }

  //Getting all posts
  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
}
