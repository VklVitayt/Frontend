import { Component, OnInit } from '@angular/core';
import {Employee} from '../../models/employee';
import {User} from '../../models/user';
import {HttpService} from '../../services/http/http.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
    user = new User();

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

    insertUser() {
        this.httpService.insertUser('http://localhost:8080/api/user/postUser', this.user)
            .subscribe(value => {
                    console.log(value);
                },
                error => {
                    console.log(error);
                });
    }
}
