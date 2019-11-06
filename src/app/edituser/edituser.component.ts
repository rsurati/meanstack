import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  id= this._active.snapshot.paramMap.get('id');
  myform:FormGroup;
  ispassword:true;

  constructor(private _my:AuthService,private _route:Router, private _active:ActivatedRoute) {


    console.log(this.id)
    this._my.getuser(this.id).subscribe((data:any)=>{console.log(data);
      this.myform=new FormGroup(
        {
          fname:new FormControl(data.fname,Validators.required),
          email:new FormControl(data.email,Validators.required),
          pwd1:new FormControl(data.pwd1,Validators.required),
          pwd2:new FormControl(data.pwd1,Validators.required)
          
        })
    });

   }


 
  ngOnInit() {
  }

  register()
  {
   if(this.myform.valid)
    {
      console.log(this.myform.value);
      
    this._my.edituser(this.myform.value,this.id).subscribe(
      data=>{console.log(data);this._route.navigate(['../../displayuser'],{relativeTo:this._active})}
    )
     
    }else
    {
      this.ispassword=true;
    }
  }
}


