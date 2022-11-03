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
  public partes_path = 'http://localhost:8090/partes';
  public clientes_path = 'http://localhost:8090/clientes';

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

  createItem(item): Observable<Parte> {
    return this.http
      .post<Parte>(this.partes_path, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  createItemCliente(item): Observable<Parte> {
    return this.http
      .post<Parte>(this.clientes_path, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getItem(id): Observable<Parte> {
    return this.http
      .get<Parte>(this.partes_path + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getList(): Observable<Parte> {
    return this.http
      .get<Parte>(this.partes_path)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getListCliente(): Observable<Parte> {
    return this.http
      .get<Parte>(this.clientes_path)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  updateItem(id, item): Observable<Parte> {
    return this.http
      .put<Parte>(this.partes_path + '/' + id, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  updateItemCliente(id, item): Observable<Parte> {
    return this.http
      .put<Parte>(this.clientes_path + '/' + id, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  deleteItem(id): Observable<Parte> {
    return this.http
      .delete<Parte>(this.partes_path + '/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  deleteItemCliente(id): Observable<Parte> {
    return this.http
      .delete<Parte>(this.clientes_path + '/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

}
