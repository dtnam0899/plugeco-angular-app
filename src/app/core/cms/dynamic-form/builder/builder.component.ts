import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  copyArrayItem,
  CdkDragExit,
  CdkDragEnter
} from '@angular/cdk/drag-drop';
import { Employee, FieldTypeList, FormColumn, FormField, Service } from './demo.service';
import remove from 'lodash-es/remove';
import { ListIteratee } from 'lodash';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss']
})
export class BuilderComponent {
  employee: Employee;

  formColumn: FormColumn;

  fieldTypeList: FieldTypeList;

  columnCount: number = 1;

  constructor(service: Service) {
    this.employee = service.getEmployee();
    this.formColumn = service.getFormColumn();
    this.fieldTypeList = service.getFieldTypeList();
    this.columnCount = this.getColumnCount();

  }

  ngAfterViewInit(): void {}

  getColumnCount(){
    return this.formColumn.Columns.length;
  }

  drop(event: CdkDragDrop<FormField[]>) {
    debugger
    if(event.previousContainer.id == "fields") {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      if (event.previousContainer.data) {
        let  fields : ListIteratee<FormField[]> = this.fieldTypeList.Fields;
        remove(fields, { markDragged : true });
      }
      return;
    }
    
    if (event.previousContainer === event.container) {     
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
    else{
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }   
  }

  onFieldExited(event: CdkDragExit<any>) {
    let itemIndex = event.container._dropListRef.getItemIndex(event.item._dragRef);
    let deleteCount = 0;
    let item = {...event.item.data, markDragged: true};
    
    this.fieldTypeList.Fields.splice(itemIndex + 1 , deleteCount, item);
  }

  onFieldEntered(event: CdkDragEnter<any>) {
    let  fields : ListIteratee<FormField[]> = this.fieldTypeList.Fields;
    remove(fields, { markDragged : true });
  }
}


