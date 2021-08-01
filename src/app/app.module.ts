import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PlanForDayComponent } from './plan-for-day/plan-for-day.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { GiftsComponent } from './gifts/gifts.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanForDayComponent,
    WelcomePageComponent,
    GiftsComponent
  ],
  imports: [ NgbModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent ]
})
export class AppModule { }
