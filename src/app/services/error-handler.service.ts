import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor() { }

  public handleError(error: HttpErrorResponse)
    {
      if (error.status === 0)
        console.error("Hubo un error:\n\t", error.error);
      else
      {
        console.error(error);
  
        let errorMessage ="El backend retorno el código: " 
          + error.status + "\nBody: \n\t";
  
        if (error.hasOwnProperty('error')
          && (error.error !== null && error.error !== undefined) 
          && error.error.hasOwnProperty('message') )
        {
          errorMessage += error.error.message;
        }
        else
          errorMessage += 'something was wrong.';
  
        console.error(errorMessage);
      }
  
      return throwError(() => error);
    }
}