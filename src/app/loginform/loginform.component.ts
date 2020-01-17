import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

  addData(value:NgForm){

  }

  mainPage(){

    this.route.navigate(['mainpage'])
    console.log("not goin")
  }
register(){
  this.route.navigate(['register'])
  console.log("registered")
}
}
