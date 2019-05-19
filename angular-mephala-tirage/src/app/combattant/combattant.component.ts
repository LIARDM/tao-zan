import { Component, OnInit, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Region, REGIONS } from '../models/region.model';
import { Combattant } from '../models/combattant.model';

@Component({
  selector: 'app-combattant',
  templateUrl: './combattant.component.html',
  styleUrls: ['./combattant.component.scss']
})
export class CombattantComponent implements OnInit {

  public listCombattants : Combattant[] = [];
  public listRegions : Region[];
  public selectedRegion : Region

  constructor(
  ) 
  {
    this.selectedRegion = new Region();
  }

  ngOnInit() 
  {
    this.listRegions = REGIONS;
  }

  public addCombattant(name :string)
  {
    console.log("nom="+name);
    let newCombattant : Combattant = new Combattant();
    newCombattant.name = name;
    if(this.selectedRegion.name.length != 0)
    {
      newCombattant.region = this.selectedRegion.name;
      this.listCombattants.push(newCombattant);
    }
  }

  public changeRegion(value)
  {
    console.log("Region="+ value.name);
    this.selectedRegion.name = value.name;
  }

}
