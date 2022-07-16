import { Component, OnInit } from '@angular/core';

import { subscribeOn } from 'rxjs';
import { ProyectosService } from 'src/app/services/proyectos.service';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos:any;

  constructor(private datosProyectos:ProyectosService) { }

  ngOnInit(): void {
    this.datosProyectos.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.proyectos=data;
    });
  }

  
}
