import { from } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { UserService } from './../../services/user.service';
import { AlertfyService } from './../../services/alertfy.service';
import { User } from './../../model/User';




@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registrationForm: FormGroup;

  user: User;
  userSubmitted: boolean;

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private alertftService: AlertfyService) { }

  ngOnInit() {
    // this.registrationForm=new FormGroup({
    //   userName:new FormControl('Mark',Validators.required),
    //   email:new FormControl(null,[Validators.required,Validators.email]),
    //   password:new FormControl(null,[Validators.required,Validators.minLength(4)]),
    //   confirmPassword:new FormControl(null,[Validators.required]),
    //   mobile:new FormControl(null,[Validators.required,Validators.maxLength(10)])
    // },[this.passwordMatchingValidator])

    // or using form builder
    this.createRegisterationForm();
  }

  createRegisterationForm(){
    this.registrationForm = this.fb.group({
      userName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(4)]],
      confirmPassword: [null, Validators.required],
      mobile: [null, [Validators.required, Validators.maxLength(10)]]
    }, {validators: this.passwordMatchingValidator});
  }

  // validation Function return null or js object {key:value} for the errors prop. , null mean valid
  passwordMatchingValidator(fg: FormGroup): Validators{
    return fg.get('password').value === fg.get('confirmPassword').value ? null : {notmatched: true};
  }

  onSubmit(){
    console.log(this.registrationForm.value);
    this.userSubmitted = true;
    if (this.registrationForm.valid){
      // this.user=Object.assign(this.user,this.registrationForm.value);
      console.log(this.user);
      // localStorage.setItem('Users',JSON.stringify(this.user));  //this for only one user
      this.userService.addUser(this.userData());
      this.registrationForm.reset();
      this.userSubmitted = false;

      this.alertftService.success('Congrats you are successfully registered');
    }else{
      this.alertftService.error('Kindly provide the required fields');
    }

  }

  userData(): User {
    return this.user = {
      userName: this.userName.value,
      email: this.email.value,
      password: this.password.value,
      mobile: this.mobile.value
    };
  }

  // Geter methods for all controls ------------------------------------------
  get userName(){
    return this.registrationForm.get('userName') as FormControl;
  }
  get email(){
    return this.registrationForm.get('email') as FormControl;
  }
  get password(){
    return this.registrationForm.get('password') as FormControl;
  }
  get confirmPassword(){
    return this.registrationForm.get('confirmPassword') as FormControl;
  }
  get mobile(){
    return this.registrationForm.get('mobile') as FormControl;
  }
  // --------------------------------------------------------------------------


}
