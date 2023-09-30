import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./list/list.module').then(m => m.ListModule)
    },
    {
        path: 'builder',
        loadChildren: () => import('./builder/builder.module').then(m => m.BuilderModule)
    },
    {
        path: 'view',
        loadChildren: () => import('./view/view.module').then(m => m.ViewModule)
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class DynamicFormRoutingModule { }
