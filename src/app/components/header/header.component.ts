import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/services/persona.service';
import { FormControl, FormGroup, NgForm } from '@angular/forms';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faPencilAlt = faPencilAlt;
 
  datospersona:any;

  nuevaPersona:Persona[]=[];
  id:number=0;
  newNombre : string ="";
  newApellido : string ="";
  newPresentacion : string ="";
  newImg_Banner : string ="";
  

  editablePersona:Persona[]=[];
  editId:number=0; 
  newDescripcion: string="";
  newImg_Perfil: string="";
  
 
  constructor(private personaService:PersonaService) { }

    
  //Inicializacion de HEADER
  
  ngOnInit(): void {
    this.obtenerPersona();
  }

  obtenerPersona(){
    this.personaService.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.datospersona=data;
    })
  }


  /*--------EDITAR HEADER----------------------------------------------*/

  //Boton abrir modal: Capturar Id y experiencia

  editableId(id:any,persona: Persona[]){
    this.editablePersona = persona;
    
    this.editId = id;
    console.log(id);
    console.log(this.editablePersona);    
  }

  //BOTON ACTUALIZAR EXPERIENCIA

  editarPresentacion(){
    const editadaPersona = new Persona({nombre: this.newNombre, apellido: this.newApellido,presentacion: this.newPresentacion, descripcion: this.newDescripcion, img_perfil: this.newImg_Perfil,img_banner: this.newImg_Banner});
    
    const editId = this.editId;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
      });

    this.personaService.actualizarPersona(editId,editadaPersona,headers).subscribe(
      data=>{},
      (error) => {
        alert("Algo ha fallado: " + error);
      },
      ()=>{this.obtenerPersona()})
  }

}
