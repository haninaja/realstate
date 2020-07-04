import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './../../services/auth.service';
import { AlertfyService } from './../../services/alertfy.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private authService: AuthService,
              private alertfy: AlertfyService,
              private router: Router) { }

  ngOnInit() {
  }

  onLogin(loginForm: NgForm){
    console.log(loginForm.value);
    const token = this.authService.authUser(loginForm.value);
    console.log(token);
    if (token){
      localStorage.setItem('token', token.userName);  // save username loccaly
      // console.log('Login Successfully');
      this.alertfy.success('Login Successfully');
      this.router.navigate(['/']);
    }else{
      // console.log('Login Not Successful');
      this.alertfy.error('Login Not Successful');
    }
  }

}
