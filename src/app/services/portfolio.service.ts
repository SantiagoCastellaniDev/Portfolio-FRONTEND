import { HttpClient, HttpClientModule } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { identity, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class PortfolioService {

  Entity:any=[];
  url:string = "";

  constructor(private http:HttpClient) { 

  }

  //OBTENER DATOS
  public obtenerDatos(url: string):Observable<any>{
    return this.http.get(url);    
  }

  //CREAR
  public crear(entity:[]):Observable<any>{
    return this.http.post<any>(this.url + "guardar", entity)
  }
  

  //BUSCAR POR ID
  public buscarById(url:string, id:number):Observable<any>{
    return this.http.get(url + 'buscar/${id}')
  }

  //ACTUALIZAR
  public update(url:string, entity:[], id:number):Observable<any>{
    return this.http.put<any>(url + 'update/${id}',entity)
  }

  //BORRAR
  borrarById(url:string,id:number):Observable<any>{
    return this.http.delete<any>(url + 'borrar/${id}')
  }
}