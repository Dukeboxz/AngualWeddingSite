import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PlanForDayComponent } from './plan-for-day/plan-for-day.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { GiftsComponent } from './gifts/gifts.component';
import { ConfirmAttendanceComponent } from './confirm-attendance/confirm-attendance.component';
import {  HttpClientModule } from '@angular/common/http';
import { ReceptionSeatingPlanComponent } from './reception-seating-plan/reception-seating-plan.component';
import { ReceptionMenuComponent } from './reception-menu/reception-menu.component'
@NgModule({
  declarations: [
    AppComponent,
    PlanForDayComponent,
    WelcomePageComponent,
    GiftsComponent,
    ConfirmAttendanceComponent,
    ReceptionSeatingPlanComponent,
    ReceptionMenuComponent
  ],
  imports: [ NgbModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent ]
})
export class AppModule { }
