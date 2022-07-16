import { Component, OnInit } from '@angular/core';


import { subscribeOn } from 'rxjs';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { Skill } from 'src/app/model/skill'


import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { faJava } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit, Skill{

   
  faHtml5 = faHtml5;
  faCss3Alt = faCss3Alt;
  faJs = faJs;
  faBootstrap = faBootstrap;
  faAngular = faAngular;
  faJava = faJava;
  faDatabase = faDatabase;
  faPowerOff = faPowerOff;

 
  url:string="http://localhost:8080/skill/";
  skillList:any;
  

  constructor(private portfolioService:PortfolioService) { }

  idSkill?: number | undefined;
  nombreSkill: string="";
  nivelSkill: string="";
  porcentajeSkill: number=0;
  colorSkill: string="";
  img_Skill: string="";
  
    
  ngOnInit(): void {
    this.portfolioService.obtenerDatos(this.url + "ver").subscribe(data =>{
      console.log(data);
      this.skillList=data;
    });
  }

/*
  //BORRAR SKILL
  borrarSkill(id:number){
    this.portfolio.borrarById(this.url,id).subscribe(dato=>{
      console.log(dato);
      alert("La Skill se ha eliminado correctamente");
      this.portfolio.obtenerDatos(this.url + "ver")
    });
  }

  //GUARDAR SKILL
  /*crearSkill():void{
    const skill = new Skill(this.idSkill,this.nombreSkill,this.porcentajeSkill,this.colorSkill,this.img_Skill);Skill;
    this.portfolio.crear(skill).subscribe(
      data => 
      {
        this.toastr.success("Nueva Skill Guardada","OK",{timeOut:3000});
        this.router.navigate(["/"]);
      },
      err => 
      {
        this.toastr.error(err.error.mensaje,"Falla en el sistema",{timeOut:3000});
        this.router.navigate(["/"]);      
      }
    )
    
  }     */

  
  
  

}
