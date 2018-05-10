import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AdminDeshboardComponent} from "./admin-dashboard/admin-dashboard.component";
import {LandingComponent} from './landing/landing.component';
import {HomepageComponent} from './homepage/homepage.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {FormsModule} from "@angular/forms";

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'admin', component: AdminDeshboardComponent},
  {path: 'homepage', component: LandingComponent},
  {path: 'home', component: HomepageComponent},
  {path: 'userProfile', component: UserProfileComponent}
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: false})
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

}

