import { Component, OnInit, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';

//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { Poule } from '../models/poule.model';
import { Region, REGIONS } from '../models/region.model';
import { Combattant } from '../models/combattant.model';

@Component({
  selector: 'app-combattant',
  templateUrl: './combattant.component.html',
  styleUrls: ['./combattant.component.scss']
})
export class CombattantComponent implements OnInit 
{
  public listPoules : Poule[] = [];
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

  public addCombattant(name :string, champion : boolean)
  {
    console.log("nom="+name);
    console.log("champion="+champion);

    let newCombattant : Combattant = new Combattant();
    newCombattant.name = name;
    newCombattant.champion = champion;
    if(this.selectedRegion.name.length != 0)
    {
      newCombattant.region = this.selectedRegion.name;
      this.listCombattants.push(newCombattant);

    }
  }

  public tirage()
  {
    // Pour chacune des régions on crée un poule
    let i : number = 0;
    for (let region in this.listRegions)
    {
      let nouvellePoule : Poule = new Poule(i);

      // Tirage d'un combattant dans la liste de tous les combattants.
      let combattantTire = this.listCombattants[Math.floor(Math.random()*this.listCombattants.length)]
      console.log("Affichage du tirage au sort" + combattantTire);
      
      

      // Ajout à un poule : 
      nouvellePoule.combattants.push(combattantTire);
  
      // Retrait du combattant de la liste de tous les combattants.
      this.removeElementFromArray(combattantTire);


      this.listPoules.push(nouvellePoule);
      i+=1;
    }
  }
  public changeRegion(value)
  {
    console.log("Region="+ value.name);
    this.selectedRegion.name = value.name;
  }

  removeElementFromArray(combattantTire)
  {
    let index = this.listCombattants.indexOf(combattantTire);
    this.listCombattants.splice(index,1);
  }

}
