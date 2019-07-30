import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Header } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CardInfoComponent } from './dashboard/card-info/card-info.component'
import { Dashboard } from './dashboard/dashboard.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { RouterAppModule } from './router/router.module';
import { TeacherComponent } from './teacher/teacher.component';
import { ParentComponent } from './parent/parent.component';
import { StudentComponent } from './student/student.component';
import { AdminComponent } from './admin/admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
@NgModule({
  declarations: [
    AppComponent,Header, FooterComponent, CardInfoComponent,Dashboard,CardInfoComponent, PageTitleComponent, TeacherComponent, ParentComponent, StudentComponent, AdminComponent, PageNotFoundComponent
  ],
  imports: [
    BrowserModule,RouterAppModule,RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
