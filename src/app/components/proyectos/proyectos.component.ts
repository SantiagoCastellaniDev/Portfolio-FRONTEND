import { Component, OnInit } from '@angular/core';

import { subscribeOn } from 'rxjs';
import { ProyectosService } from 'src/app/services/proyectos.service';
import { Proyecto } from 'src/app/model/proyecto';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos:any;
  newDescripcionProject: any;
  newFechaProject: any;
  newImg_Project: any;
  newNombreProject: any;
  newPuestoProject: any;
  editableProyecto: Proyecto[]=[];
  editId: any;
  borrarId: any;
  proyecto:Proyecto[]=[];
  proyec:Proyecto[]=[]

  constructor(private proyectoService:ProyectosService) { }

  ngOnInit(): void {
    this.obtenerProyectos();
  }

  obtenerProyectos(){
    this.proyectoService.obtenerDatos().subscribe(data =>{
      this.proyectos=data;
    })
  }


  /*--------GUARDAR EXPERIENCIA----------------------------------------------*/

  guardarProyecto(){
    const nuevoProyecto = new Proyecto({nombreProject: this.newNombreProject, fechaProject: this.newFechaProject, puestoProject: this.newPuestoProject, descripcionProject: this.newDescripcionProject, img_Project: this.newImg_Project });
    this.proyectoService.guardarProyecto(nuevoProyecto).subscribe(
      data=>{},
      (error) => {
        alert("Algo ha fallado: " + error);
      },
      ()=>{this.obtenerProyectos()})
  }



  /*--------EDITAR PROYECTO----------------------------------------------*/

  //Boton abrir modal: Capturar Id y proyecto

  editableId(id:any,proyecto: Proyecto){
    const proyec= proyecto;    
    this.editId = id;
    
    /* Cargar el modal con los datos */
    this.newDescripcionProject = proyec.descripcionProject;
    this.newFechaProject = proyec.fechaProject;
    this.newImg_Project = proyec.img_Project;
    this.newNombreProject = proyec.nombreProject;
    this.newPuestoProject = proyec.puestoProject;      
  }

  //BOTON ACTUALIZAR PROYECTO

  editarProyecto(){
    const editadoProyecto = new Proyecto({nombreProject: this.newNombreProject, fechaProject: this.newFechaProject, puestoProject: this.newPuestoProject, descripcionProject: this.newDescripcionProject, img_Project: this.newImg_Project });
    
    const editId = this.editId;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
      });

    this.proyectoService.actualizarProyecto(editId,editadoProyecto,headers).subscribe(
      data=>{},
      (error) => {
        alert("Algo ha fallado: " + error);
      },
      ()=>{this.obtenerProyectos()})
  }


  
  /*------BORRAR PROYECTO---------------------------------------------*/

  //BOTON abrir modal: Capturar Id y experiencia
  trashId(id:any,proyecto: Proyecto[]){
    this.borrarId = id;     
  }
  
  //BOTON ELIMINAR PROYECTO
  eliminarProyecto(): void{
    this.proyectoService.borrarProyecto(this.borrarId).subscribe(
      data=>{},
      (error) => {
        alert("Algo ha fallado: " + error);
      },
      ()=>{this.obtenerProyectos()})
  }
}


  

