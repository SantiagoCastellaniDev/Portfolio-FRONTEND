import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto';


@Injectable({
  providedIn: 'root'
})

export class ProyectosService {

  proyectoURL = "http://localhost:8080/proyecto/";

  constructor(private http:HttpClient) { }

  //OBTENER DATOS
  public obtenerDatos():Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(this.proyectoURL + "ver")    
  }

  //BUSCAR POR ID
  public buscarProyecto(id:number):Observable<Proyecto>{
    return this.http.get<Proyecto>(this.proyectoURL + `buscar/${id}`)
  }

  //CREAR
  public guardarProyecto(proyecto:Proyecto):Observable<any>{
    return this.http.post<any>(this.proyectoURL + "guardar", proyecto)
  }

  //ACTUALIZAR
  public actualizarProyecto(id:number,proyecto:Proyecto,httpHeaders:HttpHeaders):Observable<any>{    
    return this.http.put<any>(this.proyectoURL + `editar/${id}`,proyecto,{})
  }

  //BORRAR
  public borrarProyecto(id:number):Observable<any>{
    return this.http.delete<any>(this.proyectoURL + `borrar/${id}`)
  }


}
