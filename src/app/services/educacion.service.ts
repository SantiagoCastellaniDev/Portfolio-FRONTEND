import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  educacionURL = "http://localhost:8080/educacion/";

  constructor(private http:HttpClient) { }

  //OBTENER DATOS
  public obtenerDatos():Observable<Educacion[]>{
    return this.http.get<Educacion[]>(this.educacionURL + "ver")    
  }

  //BUSCAR POR ID
  public buscarEducacion(id:number):Observable<Educacion>{
    return this.http.get<Educacion>(this.educacionURL + 'buscar/${id}')
  }

  //CREAR
  public guardarEducacion(educacion:Educacion):Observable<any>{
    return this.http.post<any>(this.educacionURL + "guardar",educacion)
  }

 //ACTUALIZAR
 public actualizarEducacion(id:number,educacion:Educacion,httpHeaders:HttpHeaders):Observable<any>{    
  return this.http.put<any>(this.educacionURL + `editar/${id}`,educacion,{})
}

  //BORRAR
  public borrarEducacion(id:number):Observable<any>{
    return this.http.delete<any>(this.educacionURL + `borrar/${id}`)
  }


}
