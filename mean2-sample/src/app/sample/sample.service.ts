import { Injectable } from '@angular/core';

@Injectable()
export class SampleService {

  constructor() { }

  getTitle() {
    return 'app works using DI !';
  }

}
