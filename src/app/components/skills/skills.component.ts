import { Component, OnInit } from '@angular/core';


import { subscribeOn } from 'rxjs';
import { Skill } from 'src/app/model/skill'


import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { faJava } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { SkillService } from 'src/app/services/skill.service';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  

   
  faHtml5 = faHtml5;
  faCss3Alt = faCss3Alt;
  faJs = faJs;
  faBootstrap = faBootstrap;
  faAngular = faAngular;
  faJava = faJava;
  faDatabase = faDatabase;
  faPowerOff = faPowerOff;

 
  skills:any;
  nuevaSkill:Skill[]=[];

  idSkill?: number;
  
  editId: any;
  borrarId: number=0;

  newNombreSkill: any;
  newNivelSkill: any;
  newPorcentajeSkill: any;
  newColorSkill: any
  newImg_Skill: any;
  editableSkill: Skill[]=[];
  

  constructor(private skillService:SkillService) { }
  
  
    
  //Inicializacion DATOS SKILL

  ngOnInit(): void {
    this.obtenerSkill();
  }

  obtenerSkill(){
    this.skillService.obtenerDatos().subscribe(data =>{
      this.skills=data;
    });
  }

  



  /*--------GUARDAR EXPERIENCIA----------------------------------------------*/

  guardarSkill(){
    const nuevaSkill = new Skill({ nombreSkill: this.newNombreSkill, nivelSkill: this.newNivelSkill, porcentajeSkill: this.newPorcentajeSkill, colorSkill: this.newColorSkill, img_Skill: this.newImg_Skill } );
    this.skillService.guardarSkill(nuevaSkill).subscribe(
      data=>{},
      (error) => {
        alert("Algo ha fallado: " + error);
      },
      ()=>{this.obtenerSkill()})
  }


  /*--------EDITAR EXPERIENCIA----------------------------------------------*/

  //Boton abrir modal: Capturar Id y experiencia

  editableId(id:any,skill: Skill[]){
    this.editableSkill = skill;
    this.editId = id;    
  }

  //BOTON ACTUALIZAR EXPERIENCIA

  editarSkill(): void{
    const editadaSkill = new Skill({nombreSkill: this.newNombreSkill, nivelSkill: this.newNivelSkill, porcentajeSkill: this.newPorcentajeSkill, colorSkill: this.newColorSkill, img_Skill: this.newImg_Skill});
    
    const editId = this.editId;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
      });

    this.skillService.actualizarSkill(editId,editadaSkill,headers).subscribe(
      data=>{},
      (error) => {
        alert("Algo ha fallado: " + error);
      },
      ()=>{this.obtenerSkill()})
  }


  
  /*------BORRAR EDUCACION---------------------------------------------*/

  //BOTON abrir modal: Capturar Id y experiencia
  trashId(id:any,skill: Skill[]): void{
    this.borrarId = id;
    this.editableSkill = skill;
  }
  
  //BOTON ELIMINAR EDUCACION
  eliminarSkill(): void{
    this.skillService.borrarSkill(this.borrarId).subscribe(
      data=>{},
      (error) => {
        alert("Algo ha fallado: " + error);
      },
      ()=>{this.obtenerSkill()})
  }
}


  
