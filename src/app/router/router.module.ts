import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { Dashboard } from '../Component/dashboard/dashboard.component';
import { TeacherComponent } from '../Component/teacher/teacher.component';
import { ParentComponent } from '../Component/parent/parent.component';
import { StudentComponent } from '../Component/student/student.component';
import { AdminComponent } from '../Component/admin/admin.component';
import { PageNotFoundComponent } from '../shared/component/page-not-found/page-not-found.component';


const appRoutes: Routes =[
  {
    path:'home',
    component:Dashboard
  },
  {
    path:'teacher',
    component:TeacherComponent
  },
  {
    path:'parent',
    component:ParentComponent
  },
  {
    path:'student',
    component:StudentComponent
  },
  {
    path:'admin',
    component:AdminComponent
  },
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }
]
@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(appRoutes)
    
  ],
  declarations: []
})
export class RouterAppModule { }
