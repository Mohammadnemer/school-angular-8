import { Component, OnInit, ViewChild } from '@angular/core';
import { RestLoginService } from 'src/app/shared/service/modal/rest-api/rest-login/rest-login.service';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from 'src/app/shared/service/authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  @ViewChild("form") fieldData : NgForm;
  public fields = {
    username:{value:null},
    password:{value:null}
  }
  constructor(private loginService : RestLoginService , private authLogin : AuthenticationService , private router :  Router) { }

  ngOnInit() {
  }
  login(){
    if(this.authLogin.authenticate(this.fields['username']['value'],this.fields['password']['value'])){
      this.router.navigate(['/pages'])
    }
  }
  login2(){
    var req = {
      username:this.fields['username']['value'],
      password:this.fields['password']['value']
    }
    this.loginService.login(req).subscribe(data =>{
      console.log(data)
    });
  }
}
