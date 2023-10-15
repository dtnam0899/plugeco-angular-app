import { NgModule } from '@angular/core';
import { ViewRoutingModule } from './view-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DevExtremeModule, DxCheckBoxModule, DxNumberBoxModule, DxSelectBoxModule, DxTextBoxModule } from 'devextreme-angular';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppSharedModule } from 'src/app/shared/shared.module';
import { Service } from './demo.service';
import { ViewComponent } from './view.component';

@NgModule({
  declarations: [
   ViewComponent
  ],
  imports: [
    ViewRoutingModule,
    AppSharedModule,
    DragDropModule,
    DevExtremeModule,
    DxTextBoxModule,
    DxNumberBoxModule,
    DxCheckBoxModule,
    DxSelectBoxModule,
    FormsModule,
    ReactiveFormsModule],
  exports: [],
  providers:[Service]
})
export class ViewModule { }
