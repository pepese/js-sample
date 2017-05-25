import { Injectable } from '@angular/core';
import * as AWS from "aws-sdk";
import { CognitoUserPool, CognitoUserAttribute, CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import { environment } from '../../environments/environment';

@Injectable()
export class CognitoService {
  userPool = null;

  constructor() {
    AWS.config.region = environment.region;
    const data = { UserPoolId: environment.userPoolId, ClientId: environment.clientId};
    this.userPool = new CognitoUserPool(data);
  }

  signUp(username, password, email, phone) {
    const userData = {
      Username : username,
      Pool : this.userPool,
      Storage: sessionStorage
    };
    let attributeList = [];
    const dataEmail = {
      Name : 'email',
      Value : email
    };
    const dataPhoneNumber = {
      Name : 'phone_number',
      Value : phone
    };
    let attributeEmail = new CognitoUserAttribute(dataEmail);
    let attributePhoneNumber = new CognitoUserAttribute(dataPhoneNumber);
    attributeList.push(attributeEmail);
    attributeList.push(attributePhoneNumber);
    this.userPool.signUp(username, password, attributeList, null, function(err, result){
      if (err) {
        alert(err);
        return;
      }
      const cognitoUser = result.user;
      alert("SignUp is success!\nUser name is " + cognitoUser.getUsername() + ".\nYou need to check your SMS or E-Mail.");
    });
    return;
  }

  confirmRegistration(username, verification_code) {
    const userData = {
      Username : username,
      Pool : this.userPool,
      Storage: sessionStorage
    };
    const cognitoUser = new CognitoUser(userData);
    cognitoUser.confirmRegistration(verification_code, true, function(err, result) {
      if (err) {
        alert(err);
        return;
      }
      alert('Registration is success!');
      console.log('call result: ' + result);
    });
    return;
  }

  signIn(username, password) {
    const userData = {
      Username : username,
      Pool : this.userPool,
      Storage: sessionStorage
    };
    const cognitoUser = new CognitoUser(userData);
    const authenticationData = {
        Username : username,
        Password : password
    };
    const authenticationDetails = new AuthenticationDetails(authenticationData);
    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: function (result) {
        alert('SignIn is success!');
        console.log('access token + ' + result.getAccessToken().getJwtToken());
      },
      onFailure: function(err) {
        alert(err);
      }
    });
    return;
  }
}
