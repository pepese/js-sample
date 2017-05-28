import { Component, OnInit } from '@angular/core';
import { CognitoService } from '../../services/cognito.service';
import { Router } from '@angular/router';
import { routing } from '../../app.routing';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [CognitoService]
})
export class LoginComponent implements OnInit {
  username = '';
  password = ``;
  email = ``;
  phone = ``;
  verification_code = ``;

  constructor(
    private cognitoService: CognitoService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  siginUp() {
    this.cognitoService.signUp(this.username, this.password, this.email, this.phone);
  }

  confirmRegistration() {
    this.cognitoService.confirmRegistration(this.username, this.verification_code);
  }

  signIn() {
    let gotoMenu = function (router: Router) {
      router.navigate(['/menu']);
    }
    this.cognitoService.signIn(this.username, this.password, gotoMenu(this.router));
  }
}
