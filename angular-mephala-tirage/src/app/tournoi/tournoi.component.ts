import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@Component({
  selector: 'app-tournoi',
  templateUrl: './tournoi.component.html',
  styleUrls: ['./tournoi.component.scss']
})
export class TournoiComponent implements OnInit {

  constructor() { }

  ngOnInit() 
  {
    console.log("Hello World, I'm initializing a tournament.")
  }

}
