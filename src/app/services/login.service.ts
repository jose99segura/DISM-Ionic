import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //API path
  public usuarios_path = 'http://localhost:8090/usuarios';

  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor( private http: HttpClient ) { }

  handleError(error: HttpErrorResponse){
    if (error.error instanceof ErrorEvent) {
      console.error('Ha ocurrido un error');
    }else{
      console.error('Problem');
    }
    return throwError('Ha sucedido un problema');
  }

  getList(): Observable<Usuario> {
    return this.http
      .get<Usuario>(this.usuarios_path)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
}
