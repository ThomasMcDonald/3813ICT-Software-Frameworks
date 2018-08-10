import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 public userDetails = {
   id: 1,
   username: "mcdonaldthomas",
   birthday: "17/10/1996",
   age: "21"
 };

  public email: string;
  public password: string;
  public error: string;
  constructor(private router: Router) {}

  ngOnInit() {
  }

  loginVerification(){
    console.log(this.email + " " + this.password)
    if(this.email == "thomas@gmail.com" && this.password == "123") {
      sessionStorage.setItem("UserDetails", JSON.stringify(this.userDetails));
      this.router.navigate(['/account']);
    }
    else {
      this.error = "Username or Password is incorrect";
    }
  }

}
