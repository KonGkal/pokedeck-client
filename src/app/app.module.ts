import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PokeDetailsComponent } from './poke-details/poke-details.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { PokeCardComponent } from './poke-card/poke-card.component';
import { HttpClientModule } from '@angular/common/http';
import { PokeEvolutionsComponent } from './poke-evolutions/poke-evolutions.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PokeDetailsComponent,
    PokeListComponent,
    PokeCardComponent,
    PokeEvolutionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
