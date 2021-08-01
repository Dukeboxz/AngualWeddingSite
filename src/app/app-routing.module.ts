import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PlanForDayComponent} from './plan-for-day/plan-for-day.component'
import{ WelcomePageComponent} from './welcome-page/welcome-page.component'
import { GiftsComponent } from './gifts/gifts.component';

const routes: Routes = [
{path:'welcomepage', component: WelcomePageComponent},
{path: 'planforday', component: PlanForDayComponent},
{path: 'gifts', component:GiftsComponent},
{path:'', redirectTo: '/welcomepage', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
