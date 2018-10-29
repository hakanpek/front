import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
 export class UserService{
    // private _url: string = 'https://front-end-test.azurewebsites.net/api/todo';
    private _url: string = 'http://reportdata.monitera.mockable.io/GetSla';

    constructor(private _http: Http){
    }

    getPosts(){
       return this._http.get(this._url)
                .map((res: Response) => res.json());

     }
    }


//     import { Injectable } from '@angular/core';
// import { Http, Response} from '@angular/http';
// import 'rxjs/add/operator/map';

// @Injectable()
//  export class UserService{
//     // private _url: string = 'https://front-end-test.azurewebsites.net/api/todo';
//     private _url: string = 'http://reportdata.monitera.mockable.io/GetSla';

//     constructor(private _http: Http){
//     }

//     getPosts(){
//        return this._http.get(this._url)
//                 .map((response: Response) => response.json());

//      }
//     }
