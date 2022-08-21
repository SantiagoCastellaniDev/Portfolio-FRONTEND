import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-boton-login',
  templateUrl: './boton-login.component.html',
  styleUrls: ['./boton-login.component.css']
})
export class BotonLoginComponent implements OnInit {

  faUser = faUser;
  isLogged = false;

  constructor(private tokenService: TokenService) { }

  ngOnInit(): void { 
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    }  
  }

}
