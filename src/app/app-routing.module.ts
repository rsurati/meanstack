import { NgModule } from '@angular/core';
import { provideRoutes, Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { UploadimageComponent } from './uploadimage/uploadimage.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { DisplayuserComponent } from './displayuser/displayuser.component';
import { LoginnewComponent } from './loginnew/loginnew.component';
import { EdituserComponent } from './edituser/edituser.component';
import { UploadnewComponent } from './uploadnew/uploadnew.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { CategoryComponent } from './category/category.component';


const routes: Routes = [

  { path: '' , redirectTo: 'mainpage', pathMatch:"full"},
 
  { path: 'register', component: RegisterComponent},
  { path: 'home', component:HomeComponent},
  { path: 'signin', component: SigninComponent},
  { path: 'privacypolicy', component: PrivacypolicyComponent},
  { path: 'aboutus', component: AboutusComponent},
  { path: 'contactus', component: ContactusComponent},
  { path: 'feedback', component: FeedbackComponent},
  { path: 'userhome', component: UserhomeComponent},
  { path: 'uploadimage', component: UploadimageComponent},
  { path: 'forgetpassword', component: ForgetpasswordComponent},
  { path: 'displayuser', component:DisplayuserComponent},
  { path: 'loginnew', component:LoginnewComponent},
  { path: 'edituser/:id', component:EdituserComponent},
  { path: 'uploadnew', component:UploadnewComponent},
  { path: 'mainpage', component:MainpageComponent},
  { path: 'category', component:CategoryComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
