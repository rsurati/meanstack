import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

declare var $: any;

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  imagesofcategory: any;

  constructor(private _my:AuthService) {
      $("#home").removeClass("active");
      $("#category").addClass("active");
      $("#contactus").removeClass("active");
      $("#aboutus").removeClass("active");
    }

  ngOnInit() {


    this._my.wallpaperByCategory('animation').subscribe((data)=>{
        
      console.log(data);
      this.imagesofcategory=data;
      
      console.log("images Fetched");

      console.log(this.imagesofcategory);
    
      
    
    });

  }


  getImageByCategory(event){

    const target = event.target
    var errorList=[]
   


    const category = target.querySelector('#category').value

    console.log("category is "+category);


    this._my.wallpaperByCategory(category).subscribe((data)=>{
        
      console.log(data);
      this.imagesofcategory=data;
      
      console.log("images Fetched");

      console.log(this.imagesofcategory);
    
      
    
    });
  
    
  }

}
