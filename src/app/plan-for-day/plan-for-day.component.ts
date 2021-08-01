import { Component, OnInit, ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';

@Component({
  selector: 'app-plan-for-day',
  templateUrl: './plan-for-day.component.html',
  styleUrls: ['./plan-for-day.component.css']
})


  export class PlanForDayComponent {
    @ViewChild(MatAccordion) accordion: MatAccordion;

  constructor() { }

  ngOnInit(): void {
  }
}