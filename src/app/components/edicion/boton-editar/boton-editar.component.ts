import { Component, OnInit } from '@angular/core';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-boton-editar',
  templateUrl: './boton-editar.component.html',
  styleUrls: ['./boton-editar.component.css']
})
export class BotonEditarComponent implements OnInit {

  faPencilAlt = faPencilAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
