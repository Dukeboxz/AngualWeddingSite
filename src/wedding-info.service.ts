import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeddingInfoService {

  public url = 'https://sjjweddingfunctions.azurewebsites.net/api/RequestSong?code=Oe7akraCZeAYb1h5UlZbdvq730LI/taCvMnWZA/CXrmQUfhWDakdTQ=='; 
  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse){
    

    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
  SaveSongRequest(data: any):Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
     
    
    return this.http.post<any>(this.url, data,{ headers, responseType: 'text' as 'json' } )
    .pipe(
      
      catchError(this.handleError)
     ); 
    }
}
