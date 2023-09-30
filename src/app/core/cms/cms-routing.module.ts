import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'forms',
        loadChildren: () => import('./dynamic-form/dynamic-form.module').then(m => m.DynamicFormModule)
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class CMSRoutingModule { }
