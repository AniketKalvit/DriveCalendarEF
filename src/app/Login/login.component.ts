import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login-serivce';
import { Users } from '../Models/Users';
import { ROUTES, Router } from '@angular/router';
import { Roles } from '../apiUrls';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private fb: FormBuilder,private loginService:LoginService,private route:Router){
  }
  ngOnInit(): void {
    this.errorMessage="";
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
  user:Users={};
  errorMessage:string="";
  userLogin(){
    this.loginService.postUserLogin(this.loginForm.value).subscribe(res=>{
        //console.log(res);
      this.user.Token=res.Token;
      this.user.userName=res.UserName;
      this.user.roleId=res.RoleId;
      this.user.userId=res.UserId;
      localStorage.setItem('user',JSON.stringify(this.user));
      if(+this.user.roleId==Roles.PlacementExecutive || +this.user.roleId==Roles.PlacementManager|| +this.user.roleId==Roles.CEO|| +this.user.roleId==Roles.Admin){
        this.route.navigate(['/drives']);
      }
      else if(+this.user.roleId==Roles.Student){
        this.route.navigate(['/students']);
      }
      else{
        this.errorMessage="Check your username or password.";
      }
    });
  }
}
