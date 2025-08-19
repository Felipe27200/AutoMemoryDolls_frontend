import { inject, Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, } from '@angular/common/http';

import { environment } from '../../environments/environment.development';
import { catchError } from 'rxjs';

import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class DollService {
  private basePath = environment.apiUrl + "/api/auto-memory-dolls";
  
  private http: HttpClient = inject(HttpClient);
  private errorHandler: ErrorHandlerService = inject(ErrorHandlerService);

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  
  constructor() { }

  createDoll(Doll: any)
  {
    let url = this.basePath + "/";

    return this.http.post<any>(url, Doll, this.httpOptions)
      .pipe(catchError(this.errorHandler.handleError));
  }

  updateDoll(Doll: any, id: number)
  {
    let url = this.basePath + "/" + (+id);

    return this.http.put<any>(url, Doll, this.httpOptions)
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

  deleteById(id: number)
  {
    let url = this.basePath;

    return this.http.delete<any>(`${url}/${id}`, this.httpOptions)
      .pipe(catchError(this.errorHandler.handleError));
  }
}
