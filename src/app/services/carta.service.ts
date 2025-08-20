import { inject, Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, } from '@angular/common/http';

import { environment } from '../../environments/environment.development';
import { catchError } from 'rxjs';

import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class CartaService {
  private basePath = environment.apiUrl + "/api/cartas";
  
  private http: HttpClient = inject(HttpClient);
  private errorHandler: ErrorHandlerService = inject(ErrorHandlerService);

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  
  constructor() { }

  createCarta(Carta: any)
  {
    let url = this.basePath + "/";

    return this.http.post<any>(url, Carta, this.httpOptions)
      .pipe(catchError(this.errorHandler.handleError));
  }

  updateCarta(Carta: any, id: number)
  {
    let url = this.basePath + "/" + (+id);

    return this.http.put<any>(url, Carta, this.httpOptions)
      .pipe(catchError(this.errorHandler.handleError));
  }

  getAll()
  {
    let url = this.basePath + "/";

    return this.http.get<any>(url, this.httpOptions)
      .pipe(catchError(this.errorHandler.handleError));
  }

  getById(id: number)
  {
    let url = this.basePath;

    return this.http.get<any>(`${url}/${id}`, this.httpOptions)
      .pipe(catchError(this.errorHandler.handleError));
  }

  getByClienteId(id: number)
  {
    let url = this.basePath;

    return this.http.get<any>(`${url}/cartas-cliente/${id}`, this.httpOptions)
      .pipe(catchError(this.errorHandler.handleError));
  }

  deleteById(id: number)
  {
    let url = this.basePath;

    return this.http.delete<any>(`${url}/${id}`, this.httpOptions)
      .pipe(catchError(this.errorHandler.handleError));
  }
}
