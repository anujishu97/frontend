import { Component, OnInit } from '@angular/core';
import {User} from './user'; 
import {UserService} from "../user.service";
@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  users: User[];

  constructor(private userservice:UserService) { }

  ngOnInit() {
    this.userservice
      .getdetails()
      .subscribe((data: User[]) => {
      this.users = data;
    });
  }

}
