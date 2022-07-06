import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-boton-agregar',
  templateUrl: './boton-agregar.component.html',
  styleUrls: ['./boton-agregar.component.css']
})
export class BotonAgregarComponent implements OnInit {

  faPlus = faPlus;

  constructor() { }

  ngOnInit(): void {
  }

}
