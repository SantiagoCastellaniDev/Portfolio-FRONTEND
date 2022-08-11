/*
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  formLogin:FormGroup;
  data:any;
  

  constructor(
    private formBuilder:FormBuilder, 
    private authService:AuthService, 
    private router:Router) {
    this.formLogin = this.formBuilder.group(
      {
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required,Validators.minLength(8)]],
        nombreUsuario:['',[Validators.required]]
      }
    )
  }
  ngOnInit(): void {    
  }

  get Email (){
    return this.formLogin.get("email");
  }
  

  get nombreUsuario (){
    return this.formLogin.get("nombreUsuario");
  }

  get Password (){
    return this.formLogin.get("password");
  }

  onLogin(event:Event){
    event.preventDefault;
    this.authService.IniciarSesion(this.formLogin.value).subscribe(data=>{
      console.log("DATA: " + JSON.stringify(data));
      this.router.navigate(['/portfolio']);
    })
  }

}*/