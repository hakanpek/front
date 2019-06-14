

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
// search;
// searchid;
// events;
// post:any = {};
// username = '';
// phonenumber;
// listheadercolor = 'yellow';
// users = [];
// count;
constructor(public _userService: UserService){}
ngOnInit(){
  this._userService.GetRsId(name)
.subscribe(res => this.post = res);
  this._userService.getGetId()
  .subscribe(resPostData => this.post = resPostData);
  
    }
  }