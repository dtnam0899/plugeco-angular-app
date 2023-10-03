import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FullyLayoutComponent } from './fully-layout.component';
import { FullyLayoutRoutingModule } from './fully-layout-routing.module';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '../components/header/header.module';
import { FooterModule } from '../components/footer/footer.module';
import { SidebarModule } from '../components/sidebar/sidebar.module';
import { ConfigSidebarModule } from '../components/config-sidebar/config-sidebar.module';

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
