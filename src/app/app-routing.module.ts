import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DummyFullyLayoutComponent } from './dummy/fully-layout/fully-layout.component';
import { FullyLayoutComponent } from './layouts/fully-layout/fully-layout.component';

const routes: Routes = [
    {
        path: '',
        component: FullyLayoutComponent,
    },
    {
      path: 'dummy',
      component: DummyFullyLayoutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
