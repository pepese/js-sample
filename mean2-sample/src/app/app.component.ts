import { Component } from '@angular/core';

import { SampleService } from './sample/sample.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string;

  constructor(
    private sampleService: SampleService
  ){
    this.title = sampleService.getTitle();
  }
}
