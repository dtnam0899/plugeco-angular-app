import { NgModule } from '@angular/core';
import { PTextBoxComponent } from './p-text-box.component';
import { DxTextBoxModule } from 'devextreme-angular';
@NgModule({
  declarations: [
    PTextBoxComponent
  ],
  imports: [
    DxTextBoxModule,
  ],
  exports: [
    PTextBoxComponent
]
})
export class PTextBoxModule { }
