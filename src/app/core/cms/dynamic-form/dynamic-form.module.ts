import { NgModule } from '@angular/core';
import { DynamicFormRoutingModule } from './dynamic-form-routing.module';
import { PTextBoxComponent } from './form-items/p-text-box/p-text-box.component';
import { PNumberBoxComponent } from './form-items/p-number-box/p-number-box.component';

@NgModule({
  declarations: [
  
  ],
  imports: [DynamicFormRoutingModule],
  exports: []
})
export class DynamicFormModule { }
