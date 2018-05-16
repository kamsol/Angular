import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable,Subject } from 'rxjs';
import 'rxjs/add/operator/toPromise';
import { Employee } from '../Models/Employee';



@Injectable()
export class DataService {

  private listLength: number;
  private baseurl: string;
  private list = [];
  private subject = new Subject();

  employees = this.subject.asObservable();


  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseurl = baseUrl;
  }
  ngOnInit() {
    this.getEmployee();
  }

  getEmployee() {
    this.http.get<Employee[]>(this.baseurl + 'api/Employee').subscribe(response => {
      this.subject.next(response);
      this.listLength = response.length;
    }, error => {
      console.log("Unable to get employees");
    });
  }



  getListLength() {
    return this.listLength;
  }



  addEmployee(employee) {
    this.http.post(this.baseurl + 'api/Employee', employee).subscribe(response => {
      this.subject.next(response)
      this.listLength++;
    }, error => {
      console.log("Unable to post employee")
    });
  
}

}
