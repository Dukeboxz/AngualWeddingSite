import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators'; 

@Component({
  selector: 'app-confirm-attendance',
  templateUrl: './confirm-attendance.component.html',
  styleUrls: ['./confirm-attendance.component.css']
})
@Injectable()
export class ConfirmAttendanceComponent  {

  url : string = 'https://sjjweddingfunctions.azurewebsites.net/api/GuestAttendanceResponse?'; 
 attendanceForm = new FormGroup({
    name: new FormControl('', Validators.required), 
    comingOrNot: new FormControl(''),
    dietaryRequirements: new FormControl('', Validators.required)

 }); 

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

  SaveResponse(data: any):Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
     
    
    return this.http.post<any>(this.url, data,{ headers, responseType: 'text' as 'json' } )
    .pipe(
      
      catchError(this.handleError)
     ); 
  }

 onSubmit(){
  var value = this.attendanceForm.value
 
  var responseData ={
    'GuestName' : value.name, 
    'IsComing': value.comingOrNot == 'true' ? true : false,
    'DietReq': value.dietaryRequirements
  }
  var rspon = JSON.stringify(responseData);
  this.SaveResponse(rspon).subscribe(res=>{
    alert("Your response has been recorded thank you") 
  }, error => {
    console.log("There was some error ",error);
    alert("There was an error please try again")
  }
  )
 }

 
}
