import { Injectable } from '@angular/core';
import { Field } from 'devextreme/ui/filter_builder';

export class Employee {
  FirstName: string;

  LastName: string;

  Address: string;

  City: string;

  Phones: string[];
}

export class Column {
  Id: string;
  Order: number;
  Fields: FormField[];
  Links: string[];
}

export class FormField {
  Type: string;
}

export class FormColumn {
  DropZone: string[];
  Columns: Column[];
}

export class FieldTypeList {
  Fields: FormField[];
}

const fieldTypeList: FieldTypeList = {
  Fields: [
    {
      Type: "TextBox"
    },
    {
      Type: "NumberBox"
    }
  ]
}

const formColumn: FormColumn = {
  DropZone: ["g1", "g2"],
  Columns: [
    {
      Id: "g1",
      Order: 1,
      Fields: [
        {
          Type: "TextBox"
        },
        {
          Type: "TextBox"
        }
      ],
      Links: [
        "g2"
      ]
    },
    {
      Id: "g2",
      Order: 2,
      Fields: [
        {
          Type: "TextBox"
        },
        {
          Type: "NumberBox"
        }
      ],
      Links: [
        "g1"
      ]
    }
  ]
}

const employee: Employee = {
  FirstName: 'John',
  LastName: 'Heart',
  Address: '351 S Hill St., Los Angeles, CA',
  City: 'Atlanta',
  Phones: ['8005552797', '8005953232'],
};

@Injectable()
export class Service {
  getEmployee(): Employee {
    return employee;
  }
  getFormColumn(): FormColumn {
    return formColumn;
  }
  getFieldTypeList(): FieldTypeList {
    return fieldTypeList;
  }
}
