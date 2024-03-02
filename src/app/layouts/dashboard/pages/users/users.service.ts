import { Injectable, ViewChild } from '@angular/core';
import { User } from './models';
import { delay, mergeMap, of } from 'rxjs';
import { MatTable } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';

let users: User[] = [];

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  getUser() {
    return this.httpClient.get<User[]>('http://localhost:3000/users')
  }

  onUserSubmited(evt: User) {
    return this.httpClient.post<User>('http://localhost:3000/users', evt).pipe(mergeMap(() => this.getUser()))
    // users = [...users, { ...evt, id: users.length + 1 }]
  }

  deleteUser(id: number) {
    users = users.filter((el) => el.id != id);
    return this.httpClient.get<User[]>('http://localhost:3000/users')
  }




}
