import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { RouterModule, Router } from '@angular/router';

declare var $:any;

@Component({
  selector: 'app-loginnew',
  templateUrl: './loginnew.component.html',
  styleUrls: ['./loginnew.component.css']
})
export class LoginnewComponent implements OnInit {

  constructor(private Auth:AuthService, private router:Router) { }

  ngOnInit() {
  }


  loginevent(event) {
    console.log("e click");
    event.preventDefault()
    const target = event.target
    var errorList=[]
    
   
    const email = target.querySelector('#email').value
    
    const pwd1 = target.querySelector('#pwd1').value

    if(email === 'admin@admin.com' && pwd1 ==='admin')
    {

      $.notifyDefaults(
        {
          type: 'success',
         
          delay: 3000
        });
        $.notify({
          type: '',
          icon: 'glyphicon glyphicon-star',
          message: "Admin logged in <strong>Successfully</strong> "
        });
        this.router.navigate(['/displayuser']);
    }
   
    
    if(errorList.length===0)
      this.Auth.loginusernew(email,pwd1);
}

}
