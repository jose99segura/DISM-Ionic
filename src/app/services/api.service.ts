import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError  } from 'rxjs/operators';
import { Parte } from '../models/parte';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //API path
  public base_path = 'http://localhost:3000/usuarios';

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
      console.error('nose');

    }
    return throwError('Ha sucedido un problema');
  }

  createItem(item): Observable<Parte> {
    return this.http
      .post<Parte>(this.base_path, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getItem(id): Observable<Parte> {
    return this.http
      .get<Parte>(this.base_path + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getList(): Observable<Parte> {
    return this.http
      .get<Parte>(this.base_path)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  updateItem(id, item): Observable<Parte> {
    return this.http
      .put<Parte>(this.base_path + '/' + id, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  deleteItem(id): Observable<Parte> {
    return this.http
      .delete<Parte>(this.base_path + '/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

}
