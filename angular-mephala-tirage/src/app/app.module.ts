import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CombattantComponent } from './combattant/combattant.component';
import { TournoiComponent } from './tournoi/tournoi.component';

@NgModule({
  declarations:
  [
    AppComponent,
    CombattantComponent,
    TournoiComponent
  ],
  imports:
  [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
