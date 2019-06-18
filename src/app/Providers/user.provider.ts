import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers} from '@angular/http';
import 'rxjs/add/operator/map';




@Injectable()
 export class UserService{
// private _url: string = 'https://front-end-test.azurewebsites.net/api/todo';

// private _eventsUrl: string = 'http://monitera.loggly.com/apiv2/events?rsid=';



constructor(private _http: Http){}

getUsers(uname:string){
const headers = new Headers();
let logglyToken = '53ff8abb-9b0e-4cf3-b7d3-bbbce7557d72';
headers.append('Authorization', `Bearer ${logglyToken}`);
const opts = new RequestOptions({ headers: headers });
return this._http.get(this._searchUrl + 'uname', opts).map((res: Response) => res.json());


}


// getGetId(){
// const headers = new Headers();
// let logglyToken = '53ff8abb-9b0e-4cf3-b7d3-bbbce7557d72';
// headers.append('Authorization', `Bearer ${logglyToken}`);
// const opts = new RequestOptions({ headers: headers });
// return this._http.get(this._url, opts).map((res: Response) => res.json());


// }
}