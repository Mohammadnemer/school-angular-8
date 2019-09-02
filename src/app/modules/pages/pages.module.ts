import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from 'src/app/Component/header/header.component';
import { FooterComponent } from 'src/app/Component/footer/footer.component';
import { CardInfoComponent } from 'src/app/Component/dashboard/card-info/card-info.component';
import { Dashboard } from 'src/app/Component/dashboard/dashboard.component';
import { PageTitleComponent } from 'src/app/shared/component/page-title/page-title.component';
import { TeacherComponent } from 'src/app/Component/teacher/teacher.component';
import { ParentComponent } from 'src/app/Component/parent/parent.component';
import { StudentComponent } from 'src/app/Component/student/student.component';
import { AdminComponent } from 'src/app/Component/admin/admin.component';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { ModalComponent } from 'src/app/shared/component/modal/modal.component';
import { CreateModalDirective } from 'src/app/shared/directive/create-modal/create-modal.directive';
import { MainPageComponent } from 'src/app/Component/main-page/main-page.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MyBarChartComponent } from 'src/app/shared/component/my-bar-chart/my-bar-chart.component';
import { ChartsModule } from 'ng2-charts-x';
import { MaterialModule } from '../material/material.module';
import { AuthGurdService } from 'src/app/shared/service/auth-gurd/auth-gurd.service';
const appRoutes: Routes =[
  {
    path:'',
    component:MainPageComponent,
    canActivate:[AuthGurdService],
    children:[
      {
        path:'',
        redirectTo:'home',
        pathMatch:'full',
        canActivateChild:[AuthGurdService]
      },
      {
        path:'home',
        component:Dashboard,
        canActivateChild:[AuthGurdService]
      },
      {
        path:'teacher',
        component:TeacherComponent,
        canActivateChild:[AuthGurdService]
      },
      {
        path:'admin',
        component:AdminComponent,
        canActivateChild:[AuthGurdService]
      },
      {
        path:'student',
        component:StudentComponent,
        canActivateChild:[AuthGurdService]
      },
      {
        path:'parent',
        component:ParentComponent,
        canActivateChild:[AuthGurdService]
      }
    ]
  }
]
@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(appRoutes),FormsModule,  
     TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  }),
  ChartsModule,
  MaterialModule
  ],
  declarations: [MainPageComponent, Header , FooterComponent , CardInfoComponent ,Dashboard ,PageTitleComponent,
    TeacherComponent, ParentComponent, StudentComponent, AdminComponent,GridComponent, ModalComponent, CreateModalDirective,MyBarChartComponent],
    providers :[AuthGurdService]
})
export class PagesModule { }
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}