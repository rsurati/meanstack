import { Component } from '@angular/core';
import * as AOS from 'aos';
import {Subscription } from 'rxjs';
import {Router} from '@angular/router';

declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wallpaper';
  public isLogged=false;
  ngOnInit() {

    if(!sessionStorage.getItem("email"))
    {
      this.isLogged = false;
    }
    else
    {
      this.isLogged = true;
    }

    AOS.init();

    $(window).ready(function()
    {
      $.fn.lightspeedBox(
        {
          playbackTiming: 2000
        }
      );

    });

  }

  getFname():any
  {
    return sessionStorage.getItem("fname");
  }
  
}
