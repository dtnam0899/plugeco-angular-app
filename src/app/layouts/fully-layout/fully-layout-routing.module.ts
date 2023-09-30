import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullyLayoutComponent } from './fully-layout.component';

const routes: Routes = [
    {
        path: '',
        component: FullyLayoutComponent,
        children: [
          {
            path: 'app',
            loadChildren: () => import('../../core/core.module').then(m => m.CoreModule)
          }
        ]
    },
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class FullyLayoutRoutingModule { }
