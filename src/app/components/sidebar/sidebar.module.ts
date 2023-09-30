import { NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [RouterModule],
  exports: [SidebarComponent]
})
export class SidebarModule { }
