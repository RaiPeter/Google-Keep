import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
userData:object=[]
  constructor(private route:Router) { }

url:string="http://localhost:5500/users";
  
ngOnInit() {
  }
  addData(form){
    this.userData={
      "email":form.email,
      "password":form.password,
      "confirmpassword":form.confirmpassword
    }
  }

  mainPage(){
this.route.navigate(['mainpage'])
  }
}
