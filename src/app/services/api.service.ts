import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError  } from 'rxjs/operators';
// import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //API path
  // eslint-disable-next-line @typescript-eslint/naming-convention
  public base_path = 'http://localhost:3000/usuarios';

  public httpOptions = {
    headers: new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/json'
    })
  };

  constructor( private http: HttpClient ) { }

  // handleError(error: HttpErrorResponse){
  //   if (error.error instanceof ErrorEvent) {
  //     console.error('Ha ocurrido un error');
  //   }else{
  //     console.error('nose');

  //   }
  //   return throwError('Ha sucedido un problema');
  // }

  // createItem(item): Observable<Usuario> {
  //   return this.http
  //     .post<Usuario>(this.base_path, JSON.stringify(item), this.httpOptions)
  //     .pipe(
  //       retry(2),
  //       catchError(this.handleError)
  //     )
  // }

  // getItem(id): Observable<Usuario> {
  //   return this.http
  //     .get<Usuario>(this.base_path + '/' + id)
  //     .pipe(
  //       retry(2),
  //       catchError(this.handleError)
  //     )
  // }

  // getList(): Observable<Usuario> {
  //   return this.http
  //     .get<Usuario>(this.base_path)
  //     .pipe(
  //       retry(2),
  //       catchError(this.handleError)
  //     )
  // }

  // updateItem(id, item): Observable<Usuario> {
  //   return this.http
  //     .put<Usuario>(this.base_path + '/' + id, JSON.stringify(item), this.httpOptions)
  //     .pipe(
  //       retry(2),
  //       catchError(this.handleError)
  //     )
  // }

  // deleteItem(id): Observable<Usuario> {
  //   return this.http
  //     .delete<Usuario>(this.base_path + '/' + id, this.httpOptions)
  //     .pipe(
  //       retry(2),
  //       catchError(this.handleError)
  //     )
  // }

}
