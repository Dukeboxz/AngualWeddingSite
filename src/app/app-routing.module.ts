import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PlanForDayComponent} from './plan-for-day/plan-for-day.component'
import{ WelcomePageComponent} from './welcome-page/welcome-page.component'
import { GiftsComponent } from './gifts/gifts.component';
import { ConfirmAttendanceComponent } from './confirm-attendance/confirm-attendance.component';

const routes: Routes = [
{path:'welcomepage', component: WelcomePageComponent},
{path: 'planforday', component: PlanForDayComponent},
{path: 'gifts', component:GiftsComponent},
{path: 'confirmAttendance', component:ConfirmAttendanceComponent},
{path:'', redirectTo: '/welcomepage', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
