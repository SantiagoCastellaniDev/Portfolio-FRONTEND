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

  constructor(private formBuilder:FormBuilder, private authService:AuthService, private ruta:Router) {
    this.formLogin = this.formBuilder.group(
      {
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required,Validators.minLength(8)]],

        /*Hay algunos parametros mas que aparecen en el video masterclass 8 minuto 17:53*/

      }
    )
  }

  ngOnInit(): void {    
  }

  get Email (){
    return this.formLogin.get("email");
  }

  get Password (){
    return this.formLogin.get("password");
  }

  onLogin(event:Event){
    event.preventDefault;
    this.authService.IniciarSesion(this.formLogin.value).subscribe(data=>{
      console.log("DATA: " + JSON.stringify(data));
      this.ruta.navigate(['/portfolio']);
    })
  }

}
