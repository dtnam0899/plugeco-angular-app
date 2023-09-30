import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DummyFullyLayoutModule } from './dummy/fully-layout/fully-layout.module';
import { FullyLayoutModule } from './layouts/fully-layout/fully-layout.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DummyFullyLayoutModule,
    FullyLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
