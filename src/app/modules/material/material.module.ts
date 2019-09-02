import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav'
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  imports: [MatButtonModule,MatListModule,MatSidenavModule,MatToolbarModule],
  exports: [MatButtonModule,MatListModule,MatSidenavModule,MatToolbarModule],
})
export class MaterialModule { }
