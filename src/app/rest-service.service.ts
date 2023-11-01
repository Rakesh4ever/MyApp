import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './registration/user';

@Injectable({
  providedIn: 'root'
})
export class RestServiceService {

  constructor(private http:HttpClient) { }

  getUsers(){
    const URL ="/api/user/getusers";

    return this.http.get<User>(URL);
  }
}
