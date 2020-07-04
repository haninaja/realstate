import { User } from './../model/User';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor() { }

addUser(user: User){
  let users = [];
  if (localStorage.getItem('Users')){
    users = JSON.parse(localStorage.getItem('Users'));
    users = [user, ...users];  // ...spread operator
  }else{
    users = [user];
  }
  localStorage.setItem('Users', JSON.stringify(users));
}

}
