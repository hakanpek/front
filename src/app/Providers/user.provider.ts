import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

const headers = new Headers();
let logglyToken = '53ff8abb-9b0e-4cf3-b7d3-bbbce7557d72';
headers.append('Authorization', `Bearer ${logglyToken}`);
  const opts = new RequestOptions({ headers: headers });

@Injectable() export class UserService{
   private _searchurl: string = 'http://monitera.loggly.com/apiv2/search?q=*';
   private _url: string = 'http://monitera.loggly.com/apiv2/events?rsid=';
   // private _url: string = 'https://front-end-test.azurewebsites.net/api/todo';
   // private _eventsUrl: string = 'http://monitera.loggly.com/apiv2/events?rsid=';
   // private _searchUrl: string = 'http://monitera.loggly.com/apiv2/search?q=*';
      

     constructor(private _http: Http){}
   
   getPosts(uname:string){
   return this._http.get(this._searchurl+ 'username=' + uname, opts).map(res => res.json());
   }
   getGetId(){
   return this._http.get(this._url, opts).map(res => res.json());
   
   
   }
   }  
   
