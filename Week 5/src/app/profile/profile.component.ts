import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public userDetails = {};
  constructor() {

  }

  ngOnInit() {
    this.userDetails = JSON.parse(localStorage.getItem("UserDetails"));
    console.log(this.userDetails);
  }



}
