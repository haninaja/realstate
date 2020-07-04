import { AlertfyService } from './../services/alertfy.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  loggedinUser: string;

  constructor(private alertfy: AlertfyService) { }

  ngOnInit() {
  }

  loggedin(){
    this.loggedinUser = localStorage.getItem('token');
    return this.loggedinUser;
  }

  onLogout(){
    localStorage.removeItem('token');
    this.alertfy.success('you are logged out');
  }

}
