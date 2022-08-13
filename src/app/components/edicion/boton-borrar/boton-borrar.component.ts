import { Component, OnInit } from '@angular/core';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-boton-borrar',
  templateUrl: './boton-borrar.component.html',
  styleUrls: ['./boton-borrar.component.css']
})
export class BotonBorrarComponent implements OnInit {

  faTrashAlt = faTrashAlt;
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