import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { escapeIdentifier } from '@angular/compiler/src/output/abstract_emitter';

declare var swal: any;

declare var $:any;

// import { ENGINE_METHOD_DIGESTS } from 'constants';

// //import {User} from '../u'
// var User = require('./models/User');

@Component({
  selector: 'app-displayuser',
  templateUrl: './displayuser.component.html',
  styleUrls: ['./displayuser.component.css']
})
export class DisplayuserComponent implements OnInit {


   users:any;

  constructor(private _my: AuthService, private _route: Router, private _active: ActivatedRoute) {
      $("#home").removeClass("active");
      $("#category").removeClass("active");
      $("#contactus").removeClass("active");
      $("#aboutus").removeClass("active");
    }

  ngOnInit() {

      this._my.displayusers().subscribe(data => {console.log(data);
        
        this.users= data;
      
          console.log(this.users);
      } );   


    


  }

  edit(idtoedit)
  {
    this._route.navigate(['./edituser',idtoedit])
  }



  delete(arg) {

    
        this._my.deleteuser(arg).subscribe(data=>{console.log(data)})
      
     
    
           
  }

  

  
   
}
