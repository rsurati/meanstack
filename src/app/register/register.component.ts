import { Component, OnInit } from '@angular/core';
import { AuthService} from '../auth.service'
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

declare var $:any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  myform:FormGroup;
  ispassword:true;
  
  constructor(private _my:AuthService,private _route:Router,private _active:ActivatedRoute) {


    this.myform=new FormGroup(
      {
        fname :new FormControl(null,Validators.required),
        email:new FormControl(null,Validators.required),
        pwd1:new FormControl(null,Validators.required),
        
      }
    );
   }

  ngOnInit() {
  }

  register()
  {
   if(this.myform.valid)
    {console.log(this.myform.value)
    this._my.registerUser(this.myform.value).subscribe(
      data=>{console.log(data);
        $.notifyDefaults(
        {
          type: 'success',
          // allow_dismiss: false,
          delay: 3000
        });
        $.notify({
          type: '',
          icon: 'glyphicon glyphicon-star',
          message: "An <b>User Account Created</b> has been <strong>Successfully</strong> "
        });
         this._route.navigate(['../loginnew'], { relativeTo: this._active })}
    )
     
    }else
    {
      this.ispassword=true;
    }
  }
}

