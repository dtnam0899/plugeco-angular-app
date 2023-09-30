import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DummyFullyLayoutComponent } from './dummy/fully-layout/fully-layout.component';
import { FullyLayoutComponent } from './layouts/fully-layout/fully-layout.component';

const routes: Routes = [
    {
      path: '',
      redirectTo: '',
      pathMatch: 'full'
    },
    {
      path: '',
      loadChildren: () => import('./layouts/fully-layout/fully-layout.module').then(m => m.FullyLayoutModule)
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
