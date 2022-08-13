import { Component, OnInit } from '@angular/core';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-boton-editar',
  templateUrl: './boton-editar.component.html',
  styleUrls: ['./boton-editar.component.css']
})
export class BotonEditarComponent implements OnInit {

  faPencilAlt = faPencilAlt;
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
