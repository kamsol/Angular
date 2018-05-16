import { Component, Inject, Injectable } from '@angular/core';
import { DataService } from '../Services/data.service';


@Component({
  selector: 'app-get-employees',
  templateUrl: './get-employees.component.html',

})
export class GetEmployeesComponent {

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getEmployee();
  }
  
}

