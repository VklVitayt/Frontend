import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../services/http/http.service';
import {Employee} from '../../models/employee';


@Component({
  selector: 'app-employee',
  templateUrl: './showEmployee.component.html',
  styleUrls: ['./showEmployee.component.scss']
})
export class ShowEmployeeComponent implements OnInit {

    employee = new Employee();
    employees: Employee[];
    findEmployee = new Employee();
    isEdit: boolean;
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
    deleteEmployeeById() {
        this.httpService.deleteEmployeeById(
            'http://localhost:8080/api/employee/deleteEmployee/' + this.employee.idEmployee, this.employee.idEmployee)
            .subscribe(value => {
                    console.log(value);
                },
                error => {
                    console.log(error);
                });
    }

    getEmployeeById() {
        this.httpService.getEmployeeById(
            'http://localhost:8080/api/employee/getEmployeeById/' + this.employee.idEmployee, this.employee.idEmployee)
            .subscribe(value => {
                    console.log(value);
                    this.findEmployee = value;
                },
                error => {
                    console.log(error);
                });
    }
    showEdit() {
        this.isEdit = !this.isEdit;
    }
}
