import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

declare var $:any;

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

  user:any;
  pwd : any;

  constructor(private _auth: AuthService) { }

  ngOnInit() {
  }

  sendMail(event)
	{
		event.preventDefault();

		const target = event.target;
		const email = target.querySelector('#check_email').value;

    console.log(email);

    
      var email_user = email;
  
      console.log(email_user);
  
      
        this._auth.userDetailOnly(email_user).subscribe((data:any)=>{
          
          console.log(data);
          this.user=data;
          
          console.log("images Fetched");



				this._auth.sendMail(this.user.email);
		$.notifyDefaults({
			type: 'success',
			delay: 3000
		});
		$.notify({
			type: '',
			icon: 'glyphicon glyphicon-star',
			message: "An <b>OTP</b> has been <strong>Successfully</strong> sent to your email address!"
		});
  });
		$("#otp").attr("disabled", false);


	}

}
