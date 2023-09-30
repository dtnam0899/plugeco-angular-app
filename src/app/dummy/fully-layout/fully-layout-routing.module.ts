import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DummyFullyLayoutComponent } from './fully-layout.component';

const routes: Routes = [
    {
        path: 'dummy',
        component: DummyFullyLayoutComponent,        
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class DummnyFullyLayoutRoutingModule { }
