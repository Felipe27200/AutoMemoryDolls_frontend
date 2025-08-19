import { inject, Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, } from '@angular/common/http';

import { environment } from '../../environments/environment.development';
import { catchError } from 'rxjs';

import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private basePath = environment.apiUrl + "/api/clientes";
  
  private http: HttpClient = inject(HttpClient);
  private errorHandler: ErrorHandlerService = inject(ErrorHandlerService);

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  
  constructor() { }

  createCliente(product: any)
  {
    let url = this.basePath + "/";

    return this.http.post<any>(url, product, this.httpOptions)
      .pipe(catchError(this.errorHandler.handleError));
  }

  updateCliente(product: any, id: number)
  {
    let url = this.basePath + "/" + (+id);

    return this.http.put<any>(url, product, this.httpOptions)
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
}
