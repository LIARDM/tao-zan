import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MatButtonModule, MatCheckboxModule} from '@angular/material';
import { MatRadioModule} from '@angular/material/radio';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { CombattantComponent } from './combattant/combattant.component';
import { TournoiComponent } from './tournoi/tournoi.component';

@NgModule({
  declarations:
  [
    AppComponent,
    CombattantComponent,
    TournoiComponent, 
  ],
  imports:
  [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
