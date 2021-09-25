import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PlanForDayComponent} from './plan-for-day/plan-for-day.component'
import{ WelcomePageComponent} from './welcome-page/welcome-page.component'
import { GiftsComponent } from './gifts/gifts.component';
import { ConfirmAttendanceComponent } from './confirm-attendance/confirm-attendance.component';
import { ReceptionSeatingPlanComponent } from './reception-seating-plan/reception-seating-plan.component';
import { ReceptionMenuComponent } from './reception-menu/reception-menu.component';
import { EveningReceptionComponent } from './evening-reception/evening-reception.component';

const routes: Routes = [
{path:'welcomepage', component: WelcomePageComponent},
{path: 'planforday', component: PlanForDayComponent},
{path: 'gifts', component:GiftsComponent},
{path: 'confirmAttendance', component:ConfirmAttendanceComponent},
{path: 'Reception/Menu', component: ReceptionMenuComponent}, 
{path: 'Reception/SeatingPlan', component:ReceptionSeatingPlanComponent},
{path: 'EveningReception', component: EveningReceptionComponent}, 
{path:'', redirectTo: '/welcomepage', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
