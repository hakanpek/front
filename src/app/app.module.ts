import {HttpModule} from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MinutePipe } from './minute.pipe';
import { SortByPipe } from './sort.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MinutePipe,
    SortByPipe
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
