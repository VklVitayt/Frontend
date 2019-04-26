import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../services/http/http.service';
import {Employee} from '../../models/employee';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

    employees: Employee[];
    employee = new Employee();

  constructor(private httpService: HttpService) { }

  ngOnInit() {
      this.httpService.getAllEmployee('http://localhost:8080/api/employee/getAllEmployee')
          .subscribe(value => {
                  this.employees = value;
              },
          error => {
              console.log(error);
          });
  }

    insertEmployee() {
        this.httpService.insertEmployee('http://localhost:8080/api/employee/postEmployee', this.employee)
            .subscribe(value => {
                    console.log(value);
                },
                error => {
                    console.log(error);
                });
    }
}
