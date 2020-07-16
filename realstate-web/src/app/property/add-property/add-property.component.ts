import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  @ViewChild('myForm') properyForm: NgForm;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onBack(){
    this.router.navigate(['/']);
  }

  // if we want  to send the form as param in (ngSubmit)="onSubmit(myForm)"
  // onSubmit(myform:NgForm){
  //  console.log(myform);
  // }

  // or use @ViewChild('myForm') properyForm: NgForm; and
  onSubmit(){
    console.log(this.properyForm);  // as NgForm we can access every control in the form
    console.log(this.properyForm.value);  // json object for the form control value
  }
}
