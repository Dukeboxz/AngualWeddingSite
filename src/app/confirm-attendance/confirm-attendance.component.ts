import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-confirm-attendance',
  templateUrl: './confirm-attendance.component.html',
  styleUrls: ['./confirm-attendance.component.css']
})
export class ConfirmAttendanceComponent  {

 attendanceForm = new FormGroup({
    name: new FormControl('', Validators.required), 
    comingOrNot: new FormControl(''),
    dietaryRequirements: new FormControl('', Validators.required)

 }); 

  constructor() { }

 onSubmit(){

 }
}
