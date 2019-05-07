import { Component, OnInit } from '@angular/core';
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
    isType: any;
    isKreslo: 'КРЕСЛА И ДИВАНЫ';
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
    // getProductByFurnitureType() {
    //     this.httpService.getProductByFurnitureType(
    //         'http://localhost:8080/api/product/getProductByFurnitureType/' + this.product.furnitureType, this.product.furnitureType)
    //         .subscribe(value => {
    //                 console.log(value);
    //                 this.findProduct = value;
    //             },
    //             error => {
    //                 console.log(error);
    //             });
    // }
    showEdit() {
        this.isEdit = !this.isEdit;
    }
    // showType() {
    //     this.isType = !this.isType;
    // }
}
