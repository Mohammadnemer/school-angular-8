import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { RestAdminService } from '../modal/rest-api/rest-admin.service';
import { unusedValueExportToPlacateAjd } from '@angular/core/src/render3/interfaces/definition';
import { map } from 'rxjs/internal/operators/map';
import { RestLoginService } from '../modal/rest-api/rest-login/rest-login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private restAdminService : RestAdminService , private loginService : RestLoginService) { }
  authenticate(username , password){
    let req = {
      username : username,
      password : password
    }
    return this.loginService.login(req).pipe(userData=>{
      sessionStorage.setItem("username",username);
      let authString ='Basic ' + btoa(username + ":" + password);
      sessionStorage.setItem("basicAuth",authString);
      return userData ;
    })
  }
  isUserLoggedIn(){
    let user = sessionStorage.getItem('username');
    return !(user == null);
  }
  logout(){
    sessionStorage.removeItem('username');
  }
}
