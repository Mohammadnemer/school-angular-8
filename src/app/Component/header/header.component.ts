import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthenticationService } from 'src/app/shared/service/authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.css']
})
export class Header{
    constructor(public translate: TranslateService , private authLogout : AuthenticationService,private router: Router) { }
    logout(){
        this.authLogout.logout();
        this.router.navigate(['']);
    }
}