import { Component, OnInit } from '@angular/core';

declare var $ :any;

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  users;
  constructor() {
    $("#home").removeClass("active");
    $("#category").removeClass("active");
    $("#contactus").addClass("active");
    $("#aboutus").removeClass("active");
  }

  ngOnInit() {
  }

}
