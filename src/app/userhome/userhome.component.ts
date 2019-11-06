import { Component, OnInit } from '@angular/core';import { AuthService} from '../auth.service'
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { createOfflineCompileUrlResolver } from '@angular/compiler';


@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  
  uname :any;
  uemail : any;
  users:any;
  userimages:any;


  constructor(private _my: AuthService, private _route: Router, private _active: ActivatedRoute) { }

  ngOnInit() {

    this.uname = sessionStorage.getItem('fname');
    this.uemail = sessionStorage.getItem('email');

    this._my.wallpaperByUser(this.uemail).subscribe((data)=>{
        
      console.log(data);
      this.userimages=data;
      
      console.log("images Fetched");

      console.log(this.userimages);
    
      
    
    });
  


}
  logout()
  {
    sessionStorage.clear();
    this._route.navigateByUrl('/loginnew');
  }

  userwallpaperonly(emailofuser){

    var email = emailofuser;

    console.log(email);

    
      this._my.wallpaperByUser(email).subscribe((data)=>{
        
        //console.log(data);
        this.userimages=data;
        
        console.log("images Fetched");

       // console.log(this.userimages);
      
        
      
      });
    

  }

 
}
