import { Component, OnInit } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
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
