import { Component } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { CognitoService } from './services/cognito.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CognitoService]
})
export class AppComponent {
  title = 'Cognito Sample';
  username = '';
  password = ``;
  email = ``;
  phone = ``;
  verification_code = ``;
  url = '';
  result = '';

  constructor(
    private cognitoService: CognitoService,
    private http: Http
  ){}

  siginUp() {
    this.cognitoService.signUp(this.username, this.password, this.email, this.phone);
  }

  confirmRegistration() {
    this.cognitoService.confirmRegistration(this.username, this.verification_code);
  }

  signIn() {
    this.cognitoService.signIn(this.username, this.password);
  }

  get() {
    let key = 'CognitoIdentityServiceProvider.' + environment.clientId + '.' + this.username + '.idToken';
    let idToken = sessionStorage.getItem(key);
    let headers = new Headers({ 'Authorization': idToken });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.url, options)
                    .map(res => res.text())
                    .subscribe(t => this.result = t);
  }
}
