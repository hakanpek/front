
import { Component, OnInit,Input } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http, RequestOptions } from '@angular/http';
import {  Headers, Response} from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/retry';

let headers = new Headers();
//  headers.append('Content-Type', 'application/x-www-form-urlencoded');
 headers.append('Content-Type','application/x-www-form-urlencoded');
 let logglyToken = '53ff8abb-9b0e-4cf3-b7d3-bbbce7557d72';
  headers.append('Authorization',`Bearer ${logglyToken}`);
let opts = new RequestOptions({ headers: headers});

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']

})

export class AppComponent implements OnInit {
  private _searchurl = 'http://monitera.loggly.com/apiv2/search?q=';
  private _url= 'http://monitera.loggly.com/apiv2/events?';

  abc='';
  post;
  id:number;
  public username:string;
  Message:string='Aradığınız event bulunamadı';
  isLoading: boolean = false;
   constructor(private http: Http) {
   }

private handleError (error: Response | any) {
  // In a real world app, we might use a remote logging infrastructure
  let errMsg: string;
  if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  } else {
      errMsg = error.message ? error.message : error.toString();
  }
  console.error(errMsg);
  return Observable.throw(errMsg);
}


     getUsers(uname: string) {
        // setTimeout(() => {
        //       this.isLoading = false;
        //      }, 2000);
            this.isLoading = true;  // click de göster düzgün çalışır
               console.clear();
                 this.http.get(this._searchurl + uname.replace(/\%C4%B1/g,'ı'),opts)
                 .retry(2)
                 .map(r => r.json())
                     .subscribe(res => { this.post = res;
                       this.http.get(this._url + 'rsid=' + res.rsid.id, opts)
                       .map(r => r.json())
                       .subscribe(res => { this.post = res;
                        this.abc= this.post.total_events;
                        });


                        this.isLoading = false;
                          });


                            //  this.abc =res[0]);
                            //  error => console.log('401 hatası' +  error ),
                            //  () => console.log('hepsi tamamlandı')
                            //  );  // 2 .subscribe
                        //  });   // 1 .subscribe

                      }


        ngOnInit(){


        }


      }
