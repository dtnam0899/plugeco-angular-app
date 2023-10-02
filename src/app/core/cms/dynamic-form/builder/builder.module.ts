import { NgModule } from '@angular/core';
import { BuilderComponent } from './builder.component';
import { BuilderRoutingModule } from './builder-routing.module';
import { AppSharedModule } from 'src/app/shared/shared.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DevExtremeModule, DxCheckBoxModule, DxNumberBoxModule, DxSelectBoxModule, DxTextBoxModule } from 'devextreme-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Service } from './demo.service';

@NgModule({
  declarations: [
    BuilderComponent
  ],
  imports: [
    BuilderRoutingModule,
    AppSharedModule,
    DragDropModule,
    DevExtremeModule,
    DxTextBoxModule,
    DxNumberBoxModule,
    DxCheckBoxModule,
    DxSelectBoxModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [],
  providers:[Service]
})
export class BuilderModule { }
