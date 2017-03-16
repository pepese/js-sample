import { Component } from '@angular/core';

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

  constructor(
    private sampleService: SampleService
  ){
    this.title = sampleService.getTitle();
  }
}
