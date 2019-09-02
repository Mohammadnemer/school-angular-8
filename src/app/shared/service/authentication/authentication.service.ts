import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }
  authenticate(username , password){
    if(username == 'test' && password == '1234'){
      sessionStorage.setItem('username',username)
      return true;
    }else{
      return false;
    }
  }
  isUserLoggedIn(){
    let user = sessionStorage.getItem('username');
    return !(user == null);
  }
  logout(){
    sessionStorage.removeItem('username');
  }
}
