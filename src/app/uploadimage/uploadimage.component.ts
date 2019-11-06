import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { FileUploadService} from '../file-upload.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-uploadimage',
  templateUrl: './uploadimage.component.html',
  styleUrls: ['./uploadimage.component.css']
})
export class UploadimageComponent implements OnInit {

 
  data: object;


  fileForm : FormGroup;
  
  constructor(private fb:FormBuilder,private _my: FileUploadService, private _route: Router, private _active: ActivatedRoute) {


   }

  ngOnInit() {

    this.fileForm = new FormGroup(
      {
      

        imageuploadedby: new FormControl(null, Validators.required),
        imagename: new FormControl(null, Validators.required),
        imageurl: new FormControl(null, Validators.required)

      }
    );

  }

  upload(fileForm) {
    if (this.fileForm.valid) {
      this._my.upload(this.fileForm.value).subscribe(

        function(data){
          this.data=data;
          console.log(data);
        }

      );

      if (this.data != null) {
      // localStorage.setItem('data', JSON.stringify(this.data));
        this._route.navigate(['../contactus'], { relativeTo: this._active });
      }
      
    }
    
  }


}
