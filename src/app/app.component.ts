

import { Component } from '@angular/core';
import { UserService } from './providers/user.provider';
import { Http, Response, RequestOptions,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

let headers = new Headers();
//  headers.append('Content-Type', 'application/x-www-form-urlencoded');
 headers.append('Content-Type','application/x-www-form-urlencoded');
 let logglyToken = '53ff8abb-9b0e-4cf3-b7d3-bbbce7557d72';
  headers.append('Authorization',`Bearer ${logglyToken}`);
let opts = new RequestOptions({ headers: headers});
import 'rxjs/add/operator/retry';
@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css'],
providers: [UserService]


})
export class AppComponent {
  private _searchurl: string = 'http://monitera.loggly.com/apiv2/search?q=';
private _url: string = 'http://monitera.loggly.com/apiv2/events?';
post;
events=[];
public username:string;
abc='';
id:number;

// search;
// searchid;
// events;
// post:any = {};
// username = '';
// phonenumber;
// listheadercolor = 'yellow';
// users = [];
// count;
constructor(public _userService: UserService,private _http: Http){}


getUsers(uname: string) {
  // setTimeout(() => {
  //       this.isLoading = false;
  //      }, 2000);
  
         console.clear();
           this._http.get(this._searchurl + uname.replace(/\%C4%B1/g,'ı'),opts)
           .retry(2)
           .map(r => r.json())
               .subscribe(res => { this.post = res;
                 this._http.get(this._url + 'rsid=' + res.rsid.id, opts)
                 .map(r => r.json())
                 .subscribe(res => { this.post = res;
                  this.abc= this.post.total_events;
                  });


                    });


                      //  this.abc =res[0]);
                      //  error => console.log('401 hatası' +  error ),
                      //  () => console.log('hepsi tamamlandı')
                      //  );  // 2 .subscribe
                  //  });   // 1 .subscribe

                }

ngOnInit(){
//   this._userService.getUsers(uname:string)
// .subscribe(res => this.post = res);
//   this._userService.getGetId()
//   .subscribe(resPostData => this.post = resPostData);
  
    }
  }