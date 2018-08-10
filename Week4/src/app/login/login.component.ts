import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;
  public error: string;
  constructor(private router: Router) {}

  ngOnInit() {
  }

  loginVerification(){
    console.log(this.email + " " + this.password)
    if(this.email == "thomas@gmail.com" && this.password == "123") {
      this.router.navigate(['/account']);
    }
    else {
      this.error = "Username or Password is incorrect";
    }
  }

}
