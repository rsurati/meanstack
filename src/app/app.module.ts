import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AuthService } from './auth.service'



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { UploadimageComponent } from './uploadimage/uploadimage.component';
import { DisplayuserComponent } from './displayuser/displayuser.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { LoginnewComponent } from './loginnew/loginnew.component';
import { EdituserComponent } from './edituser/edituser.component';
import { UploadnewComponent } from './uploadnew/uploadnew.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { CategoryComponent } from './category/category.component';


@NgModule({
  declarations: [


    
    AppComponent,
    
    RegisterComponent,
    HomeComponent,
    SigninComponent,
    PrivacypolicyComponent,
    AboutusComponent,
    ContactusComponent,
    FeedbackComponent,
    UserhomeComponent,
    UploadimageComponent,
    DisplayuserComponent,
    ForgetpasswordComponent,
    LoginnewComponent,
    EdituserComponent,
    UploadnewComponent,
    MainpageComponent,
    CategoryComponent,
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
