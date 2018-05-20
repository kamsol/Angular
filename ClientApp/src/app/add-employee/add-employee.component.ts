import { Component, Inject } from '@angular/core';
import { DataService } from '../Services/data.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Employee } from '../Models/Employee';



@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html'
})

export class AddEmployeeComponent {
  employeeForm: FormGroup;
  titels : string[] = ["Accountant", "Manager", "Programmer","Secratary"]
  employee = new Employee();
  snackbarshow: boolean = false;


  constructor( private data: DataService, private form: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.data.getEmployee();
    this.data.getListLength();
  }

  getLength() {
    return this.data.getListLength() + 1;
  }

  createForm() {
    this.employeeForm = this.form.group({
      name: ['', [Validators.required, Validators.minLength(6), this.whiteSpaceValidator]],
      title: ['', Validators.required]
    })
  }

  whiteSpaceValidator(control: FormControl) {

    if (control.value && control.value.trim().length < 6 )
      return { whiteSpace: true }

    return null;

  }


  onSubmit() {
    this.employee.employeeid = this.getLength();
    this.data.addEmployee(this.employee);
    this.employeeForm.reset();
    this.snackbarshow = true;
    setTimeout(() => { this.snackbarshow = false; }, 3000);
  }

}
