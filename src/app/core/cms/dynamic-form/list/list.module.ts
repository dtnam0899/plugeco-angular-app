import { NgModule } from '@angular/core';
import { ListComponent } from './list.component';
import { ListRoutingModule } from './list-routing.module';

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [ListRoutingModule],
  exports:[]
})
export class ListModule { }
