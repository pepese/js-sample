import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';
// polyfills.js
import 'core-js/es6';
import 'core-js/es7/reflect';
require('zone.js/dist/zone');

// vendor.js
// Angular
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/http';
import '@angular/router';
// RxJS
import 'rxjs';
// Other vendors for example jQuery, Lodash or Bootstrap
// You can import js, ts, css, sass, ...


platformBrowserDynamic().bootstrapModule(AppComponent);
