import { Component, OnInit } from '@angular/core';
import { CognitoService } from '../../services/cognito.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { routing } from '../../app.routing';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: [CognitoService]
})
export class MenuComponent implements OnInit {
  url = '';
  result = '';
  gotoLogin = function (router: Router) {
    router.navigate(['/login']);
  }

  constructor(
    private http: Http,
    private cognitoService: CognitoService,
    private router: Router
  ) { }

  ngOnInit() {
    if(!this.cognitoService.getSignInUserNmae()) {
      this.cognitoService.signOut(this.gotoLogin(this.router));
    }
  }

  deleteSession() {
    this.cognitoService.signOut(this.gotoLogin(this.router));
  }

  get() {
    let username_key = 'CognitoIdentityServiceProvider.' + environment.clientId + '.LastAuthUser';
    let username = sessionStorage.getItem(username_key);
    let idToken_key = 'CognitoIdentityServiceProvider.' + environment.clientId + '.' + username + '.idToken';
    let idToken = sessionStorage.getItem(idToken_key);
    let headers = new Headers({ 'Authorization': idToken });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.url, options)
                    .map(res => res.text())
                    .subscribe(t => this.result = t);
  }

}
