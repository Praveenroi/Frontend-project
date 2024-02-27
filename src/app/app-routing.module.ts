import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component1/login/login.component';
import { registerLocaleData } from '@angular/common';
import { RegisterComponent } from './component1/register/register.component';
import { HomeComponent } from './component1/home/home.component';
import { AdminloginComponent } from './component1/adminlogin/adminlogin.component';


const routes: Routes = [
  {path : "login", component:LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "home", component: HomeComponent},
  {path: "AdminLogin", component: AdminloginComponent},
  {path: " ", redirectTo: "home", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
