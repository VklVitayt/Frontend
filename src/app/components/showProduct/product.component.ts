import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../services/http/http.service';
import {Employee} from '../../models/employee';
import {User} from '../../models/user';
import {Product} from '../../models/product';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
    product = new Product();
    products: Product[];
    isEditP: boolean;
    isProduct: boolean;
    isDeleteP: boolean;
    findProduct = new Product();
    constructor(private httpService: HttpService) { }

    ngOnInit() {
        this.httpService.getAllProduct('http://localhost:8080/api/product/getAllProduct')
            .subscribe(value => {
                    this.products = value;
                },
                error => {
                    console.log(error);
                });
    }
    insertProduct() {
        this.httpService.insertProduct('http://localhost:8080/api/product/postProduct', this.product)
            .subscribe(value => {
                    console.log(value);
                },
                error => {
                    console.log(error);
                });
    }
    getProductById() {
        this.httpService.getProductById(
            'http://localhost:8080/api/product/getProductById/' + this.product.idProduct, this.product.idProduct)
            .subscribe(value => {
                    console.log(value);
                    this.findProduct = value;
                },
                error => {
                    console.log(error);
                });
    }

    deleteProductById() {
        this.httpService.deleteProductById(
            'http://localhost:8080/api/product/deleteProduct/' + this.product.idProduct, this.product.idProduct)
            .subscribe(value => {
                    console.log(value);
                },
                error => {
                    console.log(error);
                });
    }
    showEditP() {
        this.isEditP = !this.isEditP;
    }

    showProduct() {
        this.isProduct = !this.isProduct;
    }

    showDeleteP() {
        this.isDeleteP = !this.isDeleteP;
    }
}
