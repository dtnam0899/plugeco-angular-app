import { NgModule } from '@angular/core';
import { BuilderComponent } from './builder.component';
import { BuilderRoutingModule } from './builder-routing.module';
import { AppSharedModule } from 'src/app/shared/shared.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DevExtremeModule, DxCheckBoxModule, DxNumberBoxModule, DxSelectBoxModule, DxTextBoxModule } from 'devextreme-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Service } from './demo.service';
import { PTextBoxModule } from '../form-items/p-text-box/p-text-box.module';
import { PNumberBoxModule } from '../form-items/p-number-box/p-number-box.module';

@NgModule({
  declarations: [
    BuilderComponent
  ],
  imports: [
    BuilderRoutingModule,
    AppSharedModule,
    DragDropModule,
    DevExtremeModule,
    DxCheckBoxModule,
    DxSelectBoxModule,
    FormsModule,
    ReactiveFormsModule,
    PTextBoxModule,
    PNumberBoxModule,
    
  ],
  exports: [],
  providers:[Service]
})
export class BuilderModule { }
