import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { from } from 'rxjs';
import { Router } from '@angular/router';
//import {ToastrService} from 'ngx-toastr';
import { Subject } from 'rxjs';

declare var $:any;


interface registerResponse{
  success:boolean
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient, private router: Router) { }


    registerUser(user){

      return this.http.post('http://localhost:3000/register',user,{
      observe: 'body'
        

      }) ;




 }

 login(body:any)
 {
   return this.http.post('http://localhost:3000/signin',body,{
   observe:'body'
   });
 }

 get(body:any)
  {
    return this.http.get('http://localhost:3000/',{
    observe:'body',
    params: new HttpParams().append('id',body) 
    });
  }



  getuser(body) {

    return this.http.get('http://localhost:3000/'+body, { observe: 'body' });

  }

  //to edit a particular user
  edituser(body,id) {
    return this.http.put('http://localhost:3000/edit/'+id, body, { observe: 'body' });
  }

  //deleteuser  
  deleteuser(body) {
    return this.http.delete('http://localhost:3000/delete/'+body, { observe: 'body' });
  }


  // to display all users
  displayusers()
  {
    
    return this.http.post('http://localhost:3000/displayalluserfromdb',{
      observe:'body'
    
    });
  }
wallpaperByUser(email){

    console.log(email+"from Auth Service");

    return this.http.post('http://localhost:3000/WallpaperByUser',{email})

  }

  userDetailOnly(email_user){


    console.log(email_user+"from Auth Service");

    return this.http.post('http://localhost:3000/userDetailOnly',{email_user})


  }

  sendMail({email, password}: { email; password; }) {
    this.http.post('http://localhost:3000/sendmail', { email , password })
    .subscribe( (response: any) => {
    }, (error: any) => {});
  }



  wallpaperByCategory(category){


    console.log(category+"from Auth Service");

    return this.http.post('http://localhost:3000/WallpaperByCategory',{category})

    
  }


  requestEntry(email,imagename,requestimg,category)
  {
    console.log("Inside Request Auth service");
    console.log(requestimg);
    console.log(category);
    this.http.post("http://localhost:3000/requestentry", { email,imagename,requestimg,category })
      .subscribe(
        (response: any) => {
          if (response.isSucceedr) {
            
            console.log("Succes in Upload image");
            $.notifyDefaults(
              {
                type: 'prsuccessim',
                delay: 3000
              });
              $.notify({
                type: '',
                icon: 'glyphicon glyphicon-star',
                message: "File Uploaded <strong>Successfully</strong> "
              });
            sessionStorage.setItem("email",email);
            this.router.navigate(['/userhome']);
          }
        },
        (error: any) => {
          if (error.isSucceedr === "false") {
           
            console.log("Error-->");
          }
        }
        );
  }



  public email
  public isLogged
  public authListner = new Subject<boolean>();


  loginusernew(email,pwd1){ 
    console.log("b click");
    this.http.post("http://localhost:3000/loginnew",{email,pwd1}).subscribe((res: any)=>{
    console.log("my response"+res)
    console.log("my response"+res.isLogin)
      if(res.isLogin) {
        this.authListner.next(true);
        ///console.log(res.userd)
        console.log("email from service:"+res.userd['email'])
        sessionStorage.setItem('email',res.userd['email'])
        sessionStorage.setItem('fname',res.userd['fname'])
        $.notifyDefaults(
          {
            type: 'success',
           
            delay: 3000
          });
          $.notify({
            type: '',
            icon: 'glyphicon glyphicon-star',
            message: "<b>User logged<strong>Successfully</strong> "
          });
        this.router.navigate(['/userhome']);
      }
      if(!res.isLogin) {
              console.log('Error');
      }
  }
)}




}

