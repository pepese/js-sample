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
    // Session Storageにセッション情報が格納されるまで待ってから画面遷移
    let gotoMenu = function (router: Router, cognitoService: CognitoService) {
      let timerID = setInterval(function(){
        if(cognitoService.getSignInUserNmae()){
          //wait終了時の後処理
          router.navigate(['/menu']);
          clearInterval(timerID);
          timerID = null;
        }
      }, 100);
    }
    this.cognitoService.signIn(this.username, this.password, gotoMenu(this.router, this.cognitoService));
  }
}
