import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { SampleService } from './sample/sample.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [SampleService]
})
export class AppComponent {
  title: string;
  bindText: string;
  testUrl: string = "https://httpbin.org/ip";
  resText: string;

  constructor(
    private sampleService: SampleService,
    private http: Http
  ){
    this.title = sampleService.getTitle();
  }

  getSampleUrl() {
    return this.http.get(this.testUrl)
                    //.map(res => res.json())
                    //.subscribe(t => this.resText = t.origin);
                    .map(res => res.text())
                    .subscribe(t => this.resText = t);
  }
}
