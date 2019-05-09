import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {CarouselModule, ModalModule, TooltipModule} from 'ngx-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {UserComponent} from './components/addUser/user.component';
import {HttpService} from './services/http/http.service';
import {NgbAlertModule, NgbModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {ProductComponent} from './components/showProduct/product.component';
import {HomeComponent} from './components/home/home.component';
import {CarouselBasicComponentComponent} from './components/carousel-basic-component/carousel-basic-component.component';
import {CatalogComponent} from './components/catalog/catalog.component';
import {CommonModule} from '@angular/common';
import {ModalWindowComponent} from './components/modal-window/modal-window.component';
import { RegistrationComponent } from './components/registration/registration.component';
import {BuyProductComponent} from './components/buyProduct/buyProduct.component';

const appRouter: Routes = [
    {path: '', component: HomeComponent},
    {path: 'employees', component: UserComponent},
    {path: 'catalog', component: CatalogComponent},
    {path: 'product', component: ProductComponent},
    {path: 'registration', component: RegistrationComponent},
    {path: 'addUser', component: UserComponent},
    {path: 'buyProduct', component: BuyProductComponent},
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        UserComponent,
        ProductComponent,
        CarouselBasicComponentComponent,
        CatalogComponent,
        ModalWindowComponent,
        RegistrationComponent,
        BuyProductComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        TooltipModule.forRoot(),
        RouterModule.forRoot(appRouter),
        CarouselModule,
        ModalModule,
        NgbModule, NgbPaginationModule, NgbAlertModule,
        HttpClientModule,
        CommonModule,
    ],
    providers: [HttpService],
    bootstrap: [AppComponent]
})
export class AppModule {
}

