import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule} from '@angular/material';
import { MatSelectModule} from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule} from '@angular/material/input';
import { MatDividerModule} from '@angular/material/divider';
import { MatListModule} from '@angular/material/list';
import { MatTreeModule} from '@angular/material/tree';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { CombattantComponent } from './combattant/combattant.component';
import { TournoiComponent } from './tournoi/tournoi.component';
import { from } from 'rxjs';

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
    BrowserAnimationsModule,
    MatRadioModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatTreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
