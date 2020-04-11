import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';
import { User } from  '../user';
import { AuthService } from  '../auth.service';

@Component({
  selector: 'app-lib-login',
  templateUrl: './lib-login.component.html',
  styleUrls: ['./lib-login.component.css']
})
export class LibLoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder ) { }
  loginForm: FormGroup;
  isSubmitted  =  false;
  alert="";

  ngOnInit() {
    this.loginForm  =  this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

  get formControls() { return this.loginForm.controls; }

  login(){
    console.log(this.loginForm.value);
    if((this.loginForm.value['email']==='wit@gmail.com') && (this.loginForm.value['password']==='wit')){
      this.isSubmitted = true;
      this.authService.login(this.loginForm.value);
    this.router.navigateByUrl('/librarian');
      console.log("Login successful");
    }
   else{
     this.alert="Invalid Email or Password";
   }
    if(this.loginForm.invalid){
      return;
    }
    
  }

}
