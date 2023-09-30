import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FullyLayoutComponent } from './fully-layout.component';
import { FullyLayoutRoutingModule } from './fully-layout-routing.module';
import { RouterModule } from '@angular/router';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { HeaderModule } from 'src/app/components/header/header.module';
import { SidebarModule } from 'src/app/components/sidebar/sidebar.module';
import { ConfigSidebarModule } from 'src/app/components/config-sidebar/config-sidebar.module';

@NgModule({
  declarations: [
    FullyLayoutComponent
  ],
  imports: [
    FullyLayoutRoutingModule,
    HeaderModule,
    FooterModule,
    SidebarModule,
    ConfigSidebarModule
  ],
  exports: [RouterModule],
  providers: []
})
export class FullyLayoutModule { }
