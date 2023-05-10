import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VillainDetailComponent } from './villain-detail/villain-detail.component';
import { VillainsComponent } from './villains/villains.component';

const routes: Routes = [
  // default routing
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // componets
  { path: 'villains', component: VillainsComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'detail:id', component: VillainDetailComponent}, 
];

@NgModule({
  // declarations: [],
  // imports: [CommonModule],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
