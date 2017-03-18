import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { SampleService } from './sample/sample.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [SampleService]
})
export class AppComponent {
  title: string;
  text: string;
  resText: string;

  constructor(
    private sampleService: SampleService,
    private http: Http
  ){
    this.title = sampleService.getTitle();
  }

  getSample() {
    //return this.http.get("http://localhost:3000/api")
    //                .map(res => res.toString())
    //                .subscribe(t => this.resText = t);
    return this.http.get("https://httpbin.org/ip")
                    //.subscribe(res => console.log(res));
                    .map(res => res.json())
                    .subscribe(t => this.resText = t.origin);
  }
}
