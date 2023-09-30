import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FullyLayoutComponent } from './fully-layout.component';
import { FullyLayoutRoutingModule } from './fully-layout-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FullyLayoutComponent
  ],
  imports: [
    BrowserModule,
    FullyLayoutRoutingModule
  ],
  exports: [RouterModule],
  providers: []
})
export class FullyLayoutModule { }
