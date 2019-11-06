import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { from, empty } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {


  ispassword: boolean;
  myform: FormGroup;
  data: any;

  constructor(private _my: AuthService, private _route: Router, private _active: ActivatedRoute) {


    this.myform = new FormGroup(
      {

        email: new FormControl(null, Validators.required),
        pwd1: new FormControl(null, Validators.required)

      }
    );

  }

  ngOnInit() {
  }

  login() {
    if (this.myform.valid) {
      this._my.login(this.myform.value).subscribe(

        function (data:any) {
          this.data = data;
          console.log(data);
          if (data) {

            console.log("hello");
    
            localStorage.setItem('userEmail',data._id);
    
            this._route.navigateByUrl('/userhome');
    
           
          }
          else {
    
            this._route.navigateByUrl('/forgetpassword');
          }

        });

      
    }

  }

}
