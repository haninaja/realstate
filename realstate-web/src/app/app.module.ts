import { PropertyDetailResolver } from './property/property-details/property-detail-resolver';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';  // API| service register
import { Routes, RouterModule } from '@angular/router';  // routing service register
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// for ngx bootstrap
// dropdown
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


// carousel for images gallery require  npm install @kolkov/ngx-gallery --save
import { NgxGalleryModule } from '@kolkov/ngx-gallery';

// component
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailsComponent } from './property/property-details/property-details.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';

// services
import { HousingService } from './services/housing.service';
import { UserService } from './services/user.service';
import { AlertfyService } from './services/alertfy.service';
import { AuthService } from './services/auth.service';

// pipes
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';



const appRoutes: Routes = [
  {path: '', component: PropertyListComponent},
  {path: 'rent-property', component: PropertyListComponent},
  {path: 'add-property', component: AddPropertyComponent},
  {path: 'property-details/:id', component: PropertyDetailsComponent, resolve: {prp: PropertyDetailResolver}},
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
      UserRegisterComponent,
      FilterPipe,
      SortPipe
   ],
   imports: [
      BrowserModule,
      HttpClientModule,  // API services
      RouterModule.forRoot(appRoutes),   // routing services
      FormsModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      BsDropdownModule.forRoot(),
      TabsModule.forRoot(),   // for ngx-bootstrap tabs
      ButtonsModule.forRoot(), // for ngx-bootstrap radio button
      BsDatepickerModule.forRoot(),
      NgxGalleryModule
   ],
   providers: [
    HousingService,
    UserService,
    AlertfyService,
    AuthService,
    PropertyDetailResolver
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
