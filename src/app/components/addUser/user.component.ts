import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../services/http/http.service';
import {User} from '../../models/user';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
    user = new User();
    users: User[];
    isEdit: boolean;
    isUser: boolean;
    isDelete: boolean;
    findUser = new User();
  constructor(private httpService: HttpService) { }

  ngOnInit() {
      this.httpService.getAllUser('http://localhost:8080/api/user/getAllUser')
          .subscribe(value => {
                  this.users = value;
              },
              error => {
                  console.log(error);
              });
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
    getUserById() {
        this.httpService.getUserById(
            'http://localhost:8080/api/user/getUserById/' + this.user.idUser, this.user.idUser)
            .subscribe(value => {
                    console.log(value);
                    this.findUser = value;
                },
                error => {
                    console.log(error);
                });
    }

    deleteUserById() {
        this.httpService.deleteUserById(
            'http://localhost:8080/api/user/deleteUser/' + this.user.idUser, this.user.idUser)
            .subscribe(value => {
                    console.log(value);
                },
                error => {
                    console.log(error);
                });
    }
    showEdit() {
        this.isEdit = !this.isEdit;
    }

    showUser() {
        this.isUser = !this.isUser;
    }

    showDelete() {
        this.isDelete = !this.isDelete;
    }
}
