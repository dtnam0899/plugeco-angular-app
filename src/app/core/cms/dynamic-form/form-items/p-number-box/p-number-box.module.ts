import { NgModule } from '@angular/core';
import { DxNumberBoxModule } from 'devextreme-angular';
import { PNumberBoxComponent } from './p-number-box.component';
@NgModule({
  declarations: [
    PNumberBoxComponent
  ],
  imports: [
    DxNumberBoxModule,
  ],
  exports: [
    PNumberBoxComponent
]
})
export class PNumberBoxModule { }