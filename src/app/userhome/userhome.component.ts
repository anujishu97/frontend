import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {Router} from '@angular/router';
import { error } from 'protractor';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
username:String='';
city:String='';
designation='';
  constructor(private _user: UserService, private _router: Router) {
       this._user.user()
       .subscribe(
         data=>this.addName(data),
         error=>this._router.navigate(['/login'])
       )
   }
addName(data)
{
  this.username=data.username;
  this.city=data.city;
  this.designation=data.designation;
}
  ngOnInit() {
  }

  logout(){
    this._user.logout()
    .subscribe(
      data=>{console.log(data);this._router.navigate(['/login'])},
      error=>console.error(error)
    )
  }
}
