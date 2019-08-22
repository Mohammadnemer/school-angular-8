import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { Header } from './Component/header/header.component';
import { FooterComponent } from './Component/footer/footer.component';
import { CardInfoComponent } from './Component/dashboard/card-info/card-info.component'
import { Dashboard } from './Component/dashboard/dashboard.component';
import { PageTitleComponent } from './shared/component/page-title/page-title.component';
import { RouterAppModule } from './router/router.module';
import { TeacherComponent } from './Component/teacher/teacher.component';
import { ParentComponent } from './Component/parent/parent.component';
import { StudentComponent } from './Component/student/student.component';
import { AdminComponent } from './Component/admin/admin.component';
import { PageNotFoundComponent } from './shared/component/page-not-found/page-not-found.component';
import { GridComponent } from './shared/component/grid/grid.component';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { ModalComponent } from './shared/component/modal/modal.component';
import { CreateModalDirective } from './shared/directive/create-modal/create-modal.directive';
import { FormsModule } from '@angular/forms'
import { HttpConfigInterceptor } from './shared/Interceptor/app.Interceptor';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

@NgModule({
  declarations: [
    AppComponent,Header, FooterComponent, CardInfoComponent,Dashboard,CardInfoComponent, PageTitleComponent, 
    TeacherComponent, ParentComponent, StudentComponent, AdminComponent, PageNotFoundComponent, GridComponent, ModalComponent, CreateModalDirective

  ],
  imports: [
    BrowserModule,RouterAppModule,RouterModule,HttpClientModule,FormsModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}