import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullyLayoutComponent } from './fully-layout.component';

const routes: Routes = [
    {
        path: '',
        component: FullyLayoutComponent,        
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class FullyLayoutRoutingModule { }
