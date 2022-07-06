import { Component, OnInit } from '@angular/core';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-boton-borrar',
  templateUrl: './boton-borrar.component.html',
  styleUrls: ['./boton-borrar.component.css']
})
export class BotonBorrarComponent implements OnInit {

  faTrashAlt = faTrashAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
