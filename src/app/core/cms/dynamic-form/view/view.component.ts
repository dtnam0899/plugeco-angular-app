import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { Employee, Service } from './demo.service';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  employee: Employee;

  isHomeAddressVisible: boolean;

  checkBoxOptions: any;

  phoneOptions: any[] = [];

  addPhoneButtonOptions: any;

  constructor(service: Service) {
    this.employee = service.getEmployee();
    this.isHomeAddressVisible = true;

    this.phoneOptions = this.getPhonesOptions(this.employee.Phones);

    this.checkBoxOptions = {
      text: 'Show Address',
      value: true,
      onValueChanged: (e: any) => {
        this.isHomeAddressVisible = e.component.option('value');
      },
    };

    this.addPhoneButtonOptions = {
      icon: 'add',
      text: 'Add phone',
      onClick: () => {
        this.employee.Phones.push('');
        this.phoneOptions = this.getPhonesOptions(this.employee.Phones);
      },
    };
  }

  ngAfterViewInit(): void {}

  getPhonesOptions(phones: any) {
    const options = [];
    for (let i = 0; i < phones.length; i++) {
      options.push(this.generateNewPhoneOptions(i));
    }
    return options;
  }

  generateNewPhoneOptions(index: number) {
    return {
      mask: '+1 (X00) 000-0000',
      maskRules: { X: /[01-9]/ },
      buttons: [{
        name: 'trash',
        location: 'after',
        options: {
          stylingMode: 'text',
          icon: 'trash',
          onClick: () => {
            this.employee.Phones.splice(index, 1);
            this.phoneOptions = this.getPhonesOptions(this.employee.Phones);
          },
        },
      }],
    };
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log(event)
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
