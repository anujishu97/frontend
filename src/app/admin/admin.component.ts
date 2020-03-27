import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormControlName } from '@angular/forms';
import { UserService } from '../user.service';
import { error } from 'protractor';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  msg:String='';
  adminForm: FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.email,Validators.required]),
    password:new FormControl(null,Validators.required),
  })
  constructor() { }

  ngOnInit() {
  }
  login()
  {

    if(!this.adminForm.valid)
    {
      this.msg="Username and Password is incorrect";
    }
    else  
    window.location.href= "http://127.0.0.1:4200/adminhome";
  }

}
