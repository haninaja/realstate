import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// for rgx bootstrap
// dropdown
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
// carousel
import { CarouselModule } from 'ngx-bootstrap/carousel';


import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailsComponent } from './property/property-details/property-details.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';

import { HousingService } from './services/housing.service';
import { UserService } from './services/user.service';
import { AlertfyService } from './services/alertfy.service';
import { AuthService } from './services/auth.service';



const appRoutes: Routes = [
  {path: '', component: PropertyListComponent},
  {path: 'rent-property', component: PropertyListComponent},
  {path: 'add-property', component: AddPropertyComponent},
  {path: 'property-details/:id', component: PropertyDetailsComponent},
  {path: 'user/login', component: UserLoginComponent},
  {path: 'user/register', component: UserRegisterComponent},
  {path: '**', component: PropertyListComponent},
];

@NgModule({
   declarations: [
      AppComponent,
      NavBarComponent,
      PropertyListComponent,
      PropertyCardComponent,
      AddPropertyComponent,
      PropertyDetailsComponent,
      UserLoginComponent,
      UserRegisterComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      RouterModule.forRoot(appRoutes),
      FormsModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      BsDropdownModule.forRoot(),
      CarouselModule.forRoot()
   ],
   providers: [
    HousingService,
    UserService,
    AlertfyService,
    AuthService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
