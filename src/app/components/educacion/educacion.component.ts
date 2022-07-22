import { Component, OnInit } from '@angular/core';

import { subscribeOn } from 'rxjs';
import { EducacionService } from 'src/app/services/educacion.service';

import { FormControl } from '@angular/forms';
import { Educacion } from 'src/app/model/educacion';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacion:any;
  addForm: any;
  nuevaEducacion:Educacion[]=[];

  idEdu?: number;
  newtituloEdu: string="";
  newfechaEdu: string="";
  newinstitucionEdu: string="";
  newdescripcionEdu: string="";
  newimg_LogoEdu: string="";
  editableEducacion: Educacion[]=[];
  editId: any;
  borrarId: number=0;
  
  
     
  constructor(private educacionService:EducacionService) { }

  //Inicializacion DATOS EDUCACION

  ngOnInit(): void {
    this.obtenerEducacion();
  }

  obtenerEducacion(){
    this.educacionService.obtenerDatos().subscribe(data =>{
      this.educacion=data;
    });
  }

  



  /*--------GUARDAR EXPERIENCIA----------------------------------------------*/

  guardarEducacion(){
    const nuevaEducacion = new Educacion({ tituloEdu: this.newtituloEdu, fechaEdu: this.newfechaEdu, institucionEdu: this.newinstitucionEdu, descripcionEdu: this.newdescripcionEdu, img_LogoEdu: this.newimg_LogoEdu });
    this.educacionService.guardarEducacion(nuevaEducacion).subscribe(
      data=>{},
      (error) => {
        alert("Algo ha fallado: " + error);
      },
      ()=>{this.obtenerEducacion()})
  }



  /*--------EDITAR EXPERIENCIA----------------------------------------------*/

  //Boton abrir modal: Capturar Id y experiencia

  editableId(id:any,educacion: Educacion[]){
    this.editableEducacion = educacion;
    this.editId = id;    
  }

  //BOTON ACTUALIZAR EXPERIENCIA

  editarEducacion(): void{
    const editadaEducacion = new Educacion({tituloEdu: this.newtituloEdu, fechaEdu: this.newfechaEdu, institucionEdu: this.newinstitucionEdu, descripcionEdu: this.newdescripcionEdu, img_LogoEdu: this.newimg_LogoEdu });
    
    const editId = this.editId;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
      });

    this.educacionService.actualizarEducacion(editId,editadaEducacion,headers).subscribe(
      data=>{},
      (error) => {
        alert("Algo ha fallado: " + error);
      },
      ()=>{this.obtenerEducacion()})
  }


  
  /*------BORRAR EDUCACION---------------------------------------------*/

  //BOTON abrir modal: Capturar Id y experiencia
  trashId(id:any,educacion: Educacion[]): void{
    this.borrarId = id;   
    console.log(this.borrarId);  
  }
  
  //BOTON ELIMINAR EDUCACION
  eliminarEducacion(): void{
    this.educacionService.borrarEducacion(this.borrarId).subscribe(
      data=>{},
      (error) => {
        alert("Algo ha fallado: " + error);
      },
      ()=>{this.obtenerEducacion()})
  }
}
