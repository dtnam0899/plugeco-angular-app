import { Injectable } from '@angular/core';

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
}

export class FormColumn {
  Columns: Column[];
}

const formColumn : FormColumn = {
  Columns: [
    {
      Id: "g1",
      Order: 1
    },
    {
      Id: "g2",
      Order: 2
    }
  ]
}

const employee : Employee = {
  FirstName: 'John',
  LastName: 'Heart',
  Address: '351 S Hill St., Los Angeles, CA',
  City: 'Atlanta',
  Phones: ['8005552797', '8005953232'],
};

@Injectable()
export class Service {
  getEmployee() : Employee {
    return employee;
  }
  getFormColumn() : FormColumn {
    return formColumn;
  }
}
