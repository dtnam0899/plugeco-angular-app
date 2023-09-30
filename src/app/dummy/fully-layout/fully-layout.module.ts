import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DummyFullyLayoutComponent } from './fully-layout.component';
import { DummnyFullyLayoutRoutingModule } from './fully-layout-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    DummyFullyLayoutComponent
  ],
  imports: [
    BrowserModule,
    DummnyFullyLayoutRoutingModule
  ],
  exports: [RouterModule],
  providers: []
})
export class DummyFullyLayoutModule { }
