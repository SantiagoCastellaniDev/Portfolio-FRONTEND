import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})

export class IniciarSesionComponent implements OnInit {

  isLogged = false;
  isLoginFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario: string="";
  password: string="";
  roles: string[] = [];
  errMsj: string="";
  formBuilder: any;
  errors:any;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }


  // LOGIN : INICIAR SESION
  onLogin(): void {
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe(
      data => {
        this.isLogged = true;        
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;        
        this.router.navigate(['/']);
      },
      err => {
        this.isLogged = false;
        this.errMsj = err.error.message;
        alert("Algo ha fallado");
        console.log(err.error.message + "Algo ha fallado");
        this.router.navigate(['/']);
      }
    );
  }
  
  // LOGOUT: CERRAR SESION
  onLogOut(){
    this.tokenService.logOut();
    this.router.navigate(['/']);
  }
}