import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpResponseBase, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';





@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
/*
  experienciaURL = "http://localhost:8080/experiencia/";
*/
  experienciaURL = "https://scdev-backend2.herokuapp.com/experiencia/";
  

  constructor(private http:HttpClient) { }

  //OBTENER DATOS
  public obtenerDatos():Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(this.experienciaURL + "ver")    
  }

  //BUSCAR POR ID
  public buscarExperiencia(id:number):Observable<Experiencia>{
    return this.http.get<Experiencia>(this.experienciaURL + `buscar/${id}`)
  }

  //CREAR EXPERIENCIA
  public guardarExperiencia(experiencia:Experiencia):Observable<any>{
    return this.http.post<any>(this.experienciaURL + "guardar", experiencia)
  }

    //ACTUALIZAR
  public actualizarExperiencia(id:number,experiencia:Experiencia,httpHeaders:HttpHeaders):Observable<any>{    
    return this.http.put<any>(this.experienciaURL + `editar/${id}`,experiencia,{})
  }

  //BORRAR
  public borrarExperiencia(id:number):Observable<any>{
    return this.http.delete<any>(this.experienciaURL + `borrar/${id}`)
  }

}