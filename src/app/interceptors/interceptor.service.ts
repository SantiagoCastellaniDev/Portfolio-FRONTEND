import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private tokenService: TokenService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let intReq = req;
    const token = this.tokenService.getToken();
    /*const tokenUser = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJpbnZpdGFkbyIsImlhdCI6MTY2MDM1NTU4MiwiZXhwIjoxNjYwMzk1MTgyfQ.p377ny9hZ9AAsQRVuTEf8BFnSlBQv6Q1XO4fpMviZ352_qOo7bDWo8T6NYsPmY_8Gj0S7UQqFmZ6KRFrhuVzJw";*/
    if (token != null) {
      intReq = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token)});
    }/*
    else {
      intReq = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + tokenUser)});
    }*/
    return next.handle(intReq);
  }
}

export const interceptorProvider = [{provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}];
