import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from 'src/app/Component/login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { LoginPageComponent } from 'src/app/Component/login/login-page/login-page.component';
import { MaterialModule } from '../material/material.module';
const appRoutes: Routes =[
  {
    path:'',
    component:LoginComponent,
    children:[
      {
        path:'',
        component:LoginPageComponent,
      }
    ]
  }
]
@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(appRoutes),FormsModule,MaterialModule
  ],
  declarations: [LoginComponent,LoginPageComponent]
})
export class LoginModule { }
