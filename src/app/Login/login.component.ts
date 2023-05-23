import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login-serivce';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private fb: FormBuilder,private loginService:LoginService){

  }
  loginForm=this.fb.group({
    username:['',Validators.required],
    password:['',Validators.required]
  });
  
  get username(){
    return this.loginForm.get('username');
  }
  get password(){
    return this.loginForm.get('password');
  }
  userLogin(){
    this.loginService.postUserLogin(this.loginForm.value).subscribe(res=>{
        //console.log(res);
    });
  }
}
