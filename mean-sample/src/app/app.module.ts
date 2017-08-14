import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // 追加行
import { HttpModule } from '@angular/http';   // 追加行
import { BsRootModule } from 'ngx-bootstrap'; // 追加行

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // 追加行
    HttpModule,  // 追加行
    BsRootModule // 追加行
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
