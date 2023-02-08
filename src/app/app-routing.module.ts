import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';


const routes: Routes = [
  { path: '', pathMatch:  "full",redirectTo:"home" },
  { path: '***', redirectTo: "no-page-found" },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'no-page-found', component: NoPageFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
