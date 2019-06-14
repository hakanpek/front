

import { Component } from '@angular/core';
import { UserService } from './providers/user.provider';


@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css'],
providers: [UserService]


})
export class AppComponent {
  post;
  events=[];
  username: string;
  constructor(public _userService: UserService){}
  getUsers(uname: string) {
  this._userService.getPosts(uname)
  .subscribe(res => this.post = res,
  err => console.log(err),
  () => console.log("rsid loaded"))
  
  
  }
  
  
  ngOnInit(){
  this._userService.getGetId() // her refresh de 2. id de değişiyor
  .subscribe(resPostData => this.post = resPostData);
  }
}