import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute,Routes } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';





@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  
  experiencia:any;

  nuevaExperiencia:Experiencia[]=[];
  id?:any;
  newPuestoEx : string ="";
  newFechaEx : string ="";
  newEmpresaEx : string ="";
  newDescripcionEx : string ="";
  newImg_LogoEx : string ="";
  

  editableExperiencia:Experiencia[]=[];
  editId:number=0;
  #editForm: any;

  borrarId:number=0;

 
  
 
  constructor(private experienciaService:ExperienciaService, private activatedRoute:ActivatedRoute) { }

  
  //Inicializacion de EXPERIENCIAS
  
  ngOnInit(): void {
    this.obtenerExperiencias();
  }

  obtenerExperiencias(){
    this.experienciaService.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.experiencia=data;
    })
  }


  /*--------GUARDAR EXPERIENCIA----------------------------------------------*/

  guardarExperiencia(){
    const nuevaExperiencia = new Experiencia({ puestoEx: this.newPuestoEx, fechaEx: this.newFechaEx, empresaEx: this.newEmpresaEx, descripcionEx: this.newDescripcionEx, img_LogoEx: this.newImg_LogoEx });
    this.experienciaService.guardarExperiencia(nuevaExperiencia).subscribe(
      data=>{},
      (error) => {
        alert("Algo ha fallado: " + error);
      },
      ()=>{this.obtenerExperiencias()})
  }



  /*--------EDITAR EXPERIENCIA----------------------------------------------*/

  //Boton abrir modal: Capturar Id y experiencia

  editableId(id:any,experiencia: Experiencia){
    const editableExpe = experiencia;
    this.editId = id; 

    /* Cargar el modal con los datos */
    this.newPuestoEx = editableExpe.puestoEx;
    this.newFechaEx = editableExpe.fechaEx;
    this.newEmpresaEx = editableExpe.empresaEx;
    this.newDescripcionEx = editableExpe.descripcionEx;
    this.newImg_LogoEx = editableExpe.img_LogoEx;
          
  }

  //BOTON ACTUALIZAR EXPERIENCIA

  editarExperiencia(){
    const editadaExperiencia = new Experiencia({puestoEx: this.newPuestoEx, fechaEx: this.newFechaEx, empresaEx: this.newEmpresaEx, descripcionEx: this.newDescripcionEx, img_LogoEx: this.newImg_LogoEx });
    
    const editId = this.editId;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
      });

    this.experienciaService.actualizarExperiencia(editId,editadaExperiencia,headers).subscribe(
      data=>{},
      (error) => {
        alert("Algo ha fallado: " + error);
      },
      ()=>{this.obtenerExperiencias()})
  }


  
  /*------BORRAR EXPERIENCIA---------------------------------------------*/

  //BOTON abrir modal: Capturar Id y experiencia
  trashId(id:any,experiencia: Experiencia[]){
    this.borrarId = id;     
  }
  
  //BOTON ELIMINAR EXPERIENCIA
  eliminarExperiencia(): void{
    this.experienciaService.borrarExperiencia(this.borrarId).subscribe(
      data=>{},
      (error) => {
        alert("Algo ha fallado: " + error);
      },
      ()=>{this.obtenerExperiencias()})
  }
}
