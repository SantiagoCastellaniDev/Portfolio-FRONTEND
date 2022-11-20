import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
/*
  personaURL = "http://localhost:8080/persona/";
*/
  personaURL = "https://scdev-backend2.herokuapp.com/persona/";
  
  constructor(private http:HttpClient) { }

  //OBTENER DATOS
  public obtenerDatos():Observable<Persona[]>{
    return this.http.get<Persona[]>(this.personaURL + "ver")    
  }

  //BUSCAR POR ID
  public buscarPersona(id:number):Observable<Persona>{
    return this.http.get<Persona>(this.personaURL + `buscar/${id}`)
  }

  //CREAR
  public guardarPersona(persona:Persona):Observable<any>{
    return this.http.post<any>(this.personaURL + "guardar",persona)
  }

 //ACTUALIZAR
 public actualizarPersona(id:number,persona:Persona,httpHeaders:HttpHeaders):Observable<any>{    
  return this.http.put<any>(this.personaURL + `editar/${id}`,persona,{})
}

  //BORRAR
  public borrarPersona(id:number):Observable<any>{
    return this.http.delete<any>(this.personaURL + `borrar/${id}`)
  }
}
