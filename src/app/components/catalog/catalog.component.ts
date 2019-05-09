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
    isEditN: boolean;
    isTitle: boolean;
    isCard: boolean;
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
    getProductByTitle() {
        this.httpService.getProductByTitle(
            'http://localhost:8080/api/product/getProductByTitle/' + this.product.title, this.product.title)
            .subscribe(value => {
                    console.log(value);
                    this.findProduct = value;
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
                    console.log(this.product.idProduct);
                    this.findProduct = value;
                },
                error => {
                    console.log(error);
                });
    }

    showEdit() {
        this.isEdit = !this.isEdit;
    }
    showEditN() {
        this.isEditN = !this.isEditN;
    }
    showTitle() {
        this.isTitle = !this.isTitle;
    }
    showCard() {
        this.isCard = !this.isCard;
    }
}
