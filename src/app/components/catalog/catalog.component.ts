import { Component, OnInit } from '@angular/core';
import {Employee} from '../../models/employee';
import {User} from '../../models/user';
import {Product} from '../../models/product';
import {HttpService} from '../../services/http/http.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
    product = new Product();
    products: Product[];
    findProduct = new Product();
    isEdit: boolean;
    constructor(private httpService: HttpService) { }

    ngOnInit(): void {
        this.httpService.getAllProduct('http://localhost:8080/api/product/getAllProduct')
            .subscribe(value => {
                    this.products = value;
                },
                error => {
                    console.log(error);
                });
    }
}
