import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UserService } from './Providers/user.provider';
import { AvgStats } from './avgStats';



declare let $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]

})
export class AppComponent implements OnInit {
  birthday = new Date(1988, 3, 15); // April 15, 1988
  title = 'my application test';
  username = '';
  phonenumber;
  listheadercolor = 'yellow';
  searchname = '';
  posts = [];
  avgStats: AvgStats[];
  count;
  frtSla: number;



   constructor(public _userService: UserService){

     }
     ngOnInit(){
            this. _userService.getPosts()
          .subscribe(res => {
              this.avgStats = res;
             this.frtSla = this.avgStats[0].Value;

           }
          )
    }

  }


//    constructor(public _userService: UserService){

//   }
//   ngOnInit(){
//          this. _userService.getPosts()
//        .subscribe(res => this.posts = res);

//   }
//   }
