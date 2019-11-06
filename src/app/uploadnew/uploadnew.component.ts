import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-uploadnew',
  templateUrl: './uploadnew.component.html',
  styleUrls: ['./uploadnew.component.css']
})
export class UploadnewComponent implements OnInit {

  fileData: File = null;

  imgurl:String=""
  fileToUpload:File=null;


  constructor(private Auth: AuthService) { }


  handleFileInput(file:FileList){
    this.fileToUpload = file.item(0)
    var reader = new FileReader()
    reader.onload = (event: any) => {
      this.imgurl=event.target.result;
      console.log(this.imgurl)        
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  ngOnInit() {
  }

  RequestDataEntry(event)
  {
    console.log("Inside RequestDataEntry");
    event.preventDefault();
    const target = event.target;
    var errorList = [];

    const imagename = target.querySelector("#imagename").value;
    const email= target.querySelector("#email").value;
    const category = target.querySelector("#category").value;
    const storeemail = sessionStorage.getItem('email');
    const requestimg = this.imgurl;
    if (errorList.length === 0) {
      
      console.log("hello");
      console.log(requestimg);
      console.log(category);


      this.Auth.requestEntry(email,imagename,requestimg,category);
    }
    else
    {
      console.log("error in request component");
    }
    
  }

}
