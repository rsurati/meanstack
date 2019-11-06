import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  constructor() {
    $("#home").addClass("active");
    $("#category").removeClass("active");
    $("#contactus").removeClass("active");
    $("#aboutus").removeClass("active");
  }

  ngOnInit() {
  }

}
