import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PokeDetailsComponent } from './poke-details/poke-details.component';

const routes: Routes = [
  {path: 'details/:id', component: PokeDetailsComponent},
  {path: '', component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
