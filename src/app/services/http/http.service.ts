import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from '../../models/employee';
import {User} from '../../models/user';
import {Product} from '../../models/product';


@Injectable({
  providedIn: 'root'
})
export class HttpService {


    constructor(private http: HttpClient) {
    }

    public getAllEmployee(url: string): Observable<any> {
        return this.http.get(url);
    }
    public getAllProduct(url: string): Observable<any> {
        return this.http.get(url);
    }
    public getAllUser(url: string): Observable<any> {
        return this.http.get(url);
    }
    public insertEmployee(url: string, employee: Employee): Observable<any> {
        return this.http.post(url, employee);
    }
    insertProduct(url: string, product: Product): Observable<any> {
        return this.http.post(url, product);
    }
    public insertUser(url: string, user: User): Observable<any> {
        return this.http.post(url, user);
    }
    public deleteEmployeeById(url: string, employee: Employee): Observable<any> {
        return this.http.delete(url, employee.idEmployee);
    }
    public deleteUserById(url: string, user: User): Observable<any> {
        return this.http.delete(url, user.idUser);
    }
    public deleteProductById(url: string, product: Product): Observable<any> {
        return this.http.delete(url, product.idProduct);
    }
    public getProductById(url: string, product: Product): Observable<any> {
        return this.http.get(url, product.idProduct);
    }
    public getEmployeeById(url: string, employee: Employee): Observable<any> {
        return this.http.get(url, employee.idEmployee);
    }
    public getUserById(url: string, user: User): Observable<any> {
        return this.http.get(url, user.idUser);
    }
    public getProductByTitle(url: string, product: Product): Observable<any> {
        return this.http.get(url, product.title);
    }
    public getProductByFurnitureType(url: string, product: Product): Observable<any> {
        return this.http.get(url, product.furnitureType);
    }

}

