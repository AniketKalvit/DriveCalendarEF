import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from './register-services';
import { Users } from '../Models/Users';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpStatusCode } from '@angular/common/http';
import { Router } from '@angular/router';
import { PasswordValidator } from './password.validator';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm = this.fb.group({
    userName: ['',Validators.required],
    emailId: ['',Validators.required],
    password: ['',Validators.required],
    confirmPassword: ['',Validators.required],
    roleId: [1],
    isActive: [1],
  },{validator:PasswordValidator});
  
  constructor(private fb: FormBuilder,private registerService:RegisterService,private _snackBar: MatSnackBar,
    private url:Router){

  }
  user:Users={};
  registerUser(){
    console.log(this.registerForm.value);
    this.registerService.postRegisterUser(this.registerForm.value).subscribe(res=>{
      this.url.navigate(['/login']);
    });
  }

  get userName(){
    return this.registerForm.get('userName');
  }
  get emailId(){
    return this.registerForm.get('emailId');
  }
  get password(){
    return this.registerForm.get('password');
  }
  get confirmPassword(){
    return this.registerForm.get('confirmPassword');
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
