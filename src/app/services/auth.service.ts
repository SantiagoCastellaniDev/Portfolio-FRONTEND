import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiURL="https//localhost:8080/login/";
  currentUserObject:BehaviorSubject<any>

  constructor(private http:HttpClient) {
    console.log("El servicio Auth esta corriendo");
    this.currentUserObject=new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')||'{}'))
   }

   IniciarSesion(credenciales:any):Observable<any> {
    return this.http.post(this.apiURL, credenciales).pipe(map(data=>{

      sessionStorage.setItem('currentUser',JSON.stringify(data));
      
      return data
    }))

   }

   get UsuarioAutenticado (){
    return this.currentUserObject.value;

   }
    
   
}
