import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from '../../models/employee';


@Injectable({
  providedIn: 'root'
})
export class HttpService {


    constructor(private http: HttpClient) {
    }

    public getAllEmployee(url: string): Observable<any> {
        return this.http.get(url);
    }

    public insertEmployee(url: string, employee: Employee): Observable<any> {
        return this.http.post(url, employee);
    }

    public deleteEmployeeById(url: string, employee: Employee): Observable<any> {
        return this.http.delete(url, employee.idEmployee);
    }

    public getEmployeeById(url: string, employee: Employee): Observable<any> {
        return this.http.get(url, employee.idEmployee);
    }
}

