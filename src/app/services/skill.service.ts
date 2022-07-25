import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  skillURL = "http://localhost:8080/skill/";

  constructor(private http:HttpClient) { }

  //OBTENER DATOS
  public obtenerDatos():Observable<Skill[]>{
    return this.http.get<Skill[]>(this.skillURL + "ver")    
  }

  //BUSCAR POR ID
  public buscarSkill(id:number):Observable<Skill>{
    return this.http.get<Skill>(this.skillURL + `buscar/${id}`)
  }

  //CREAR
  public guardarSkill(skill:Skill):Observable<any>{
    return this.http.post<any>(this.skillURL + "guardar",skill)
  }

 //ACTUALIZAR
 public actualizarSkill(id:number,skill:Skill,httpHeaders:HttpHeaders):Observable<any>{    
  return this.http.put<any>(this.skillURL + `editar/${id}`,skill,{})
}

  //BORRAR
  public borrarSkill(id:number):Observable<any>{
    return this.http.delete<any>(this.skillURL + `borrar/${id}`)
  }

}

