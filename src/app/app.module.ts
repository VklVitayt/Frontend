import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {CarouselModule, ModalModule, TooltipModule} from 'ngx-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {EmployeeComponent} from './components/addEmployee/employee.component';
import {HttpService} from './services/http/http.service';
import {NgbAlertModule, NgbModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {ShowEmployeeComponent} from './components/showEmployees/showEmployee.component';
import {HomeComponent} from './components/home/home.component';
import {CarouselBasicComponentComponent} from './components/carousel-basic-component/carousel-basic-component.component';
import {CatalogComponent} from './components/catalog/catalog.component';
import {CommonModule} from '@angular/common';
import {ModalWindowComponent} from './components/modal-window/modal-window.component';
import { RegistrationComponent } from './components/registration/registration.component';

const appRouter: Routes = [
    {path: '', component: HomeComponent},
    {path: 'employees', component: EmployeeComponent},
    {path: 'catalog', component: CatalogComponent},
    {path: 'showEmployees', component: ShowEmployeeComponent},
    {path: 'registration', component: RegistrationComponent},
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        EmployeeComponent,
        ShowEmployeeComponent,
        CarouselBasicComponentComponent,
        CatalogComponent,
        ModalWindowComponent,
        RegistrationComponent,
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

