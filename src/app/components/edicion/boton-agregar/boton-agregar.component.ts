import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { TokenService } from 'src/app/services/token.service';


@Component({
  selector: 'app-boton-agregar',
  templateUrl: './boton-agregar.component.html',
  styleUrls: ['./boton-agregar.component.css']
})
export class BotonAgregarComponent implements OnInit {

  faPlus = faPlus;
  isAdmin = false;
  roles: string[]=[];
  
  constructor(private tokenService: TokenService) { }

  ngOnInit(): void {
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }
}
