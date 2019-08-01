import { Component, OnInit } from '@angular/core';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
  public listChampions : Combattant[] = [];
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
    let newCombattant : Combattant = new Combattant();
    newCombattant.name = name;
    newCombattant.champion = champion.valueOf();
    if(this.selectedRegion.name.length != 0)
    {
      newCombattant.region = this.selectedRegion.name;
      // Si c'est un champion :
      if(champion == true)
      {
        this.listChampions.push(newCombattant);
      }
      // Si c'est un combattant "Normal" : 
      else
      {
        this.listCombattants.push(newCombattant);
      }
      this.selectedRegion.addCombattantToRegion(newCombattant);
      
      console.log("nom= "+newCombattant.name +" || champion= "+newCombattant.champion);
      
      if(this.selectedRegion.combattants.length == 4)
      {
        console.log("Region Validée : "+ this.selectedRegion.name);
        this.removeRegionFromArray(this.selectedRegion);
      }
    }
  }

  public tirage()
  {
    // Pour chacune des champions de région on crée une poule
    let i : number = 1;
    for (let champion of this.listChampions)
    {
      console.log("Poule N°) " + i);

      let nouvellePoule : Poule = new Poule(i);
      nouvellePoule.champion = champion;
      
      // Tirage de trois combattants dans la liste de tous les combattants.
      for(let i = 0; i >= 2 ; i++)
      {
        let combattantTire = this.listCombattants[Math.floor(Math.random()*this.listCombattants.length)]
        console.log("Affichage du tirage au sort : " + combattantTire.name);
        
        // Contrôle : «Les compétiteurs appartenant à la même région ne peuvent pas se rencontrer»
        if(this.testUniciteRegion(nouvellePoule, combattantTire))
        {
          // Ajout à un poule : 
          nouvellePoule.combattants.push(combattantTire);
      
          // Retrait du combattant de la liste de tous les combattants.
          this.removeCombattantFromArray(combattantTire);
        } 
      }
      // Un fois la liste pleine on enregistre la poule et on continue.
      this.listPoules.push(nouvellePoule);
      i+=1;
    }
  }

  /**
   * 
   * @param value 
   */
  public changeRegion(value)
  {
    console.log("Region="+ value.name);
    this.selectedRegion.name = value.name;
  }

  /**
   * Contrôle si un combattant d'une même region est présent dans la poule testée.
   * @param nouvellePoule 
   * @param combattantTire 
   */
  testUniciteRegion(nouvellePoule, combattantTire)
  {
    for(let cbtest of nouvellePoule.combattants)
    {
      if(cbtest.region === combattantTire.region)
      return false;
      break;
    }
    return true;
  }

  /**
   * 
   * @param combattantTire 
   */
  removeCombattantFromArray(combattantTire)
  {
    let index = this.listCombattants.indexOf(combattantTire);
    this.listCombattants.splice(index,1);
  }

  /**
   * 
   * @param selectedRegion 
   */
  removeRegionFromArray(selectedRegion)
  {
    let resultat = this.listRegions.filter(data =>
    {
      console.log(data.name);
      return data.name !== selectedRegion.name;
    });
    this.listRegions = resultat;
    console.log(resultat);
  }
}
