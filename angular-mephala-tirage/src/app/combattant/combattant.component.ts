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
  public region : any;
  public selection : any;

  public listPoules : Poule[] = [];
  public listCombattants : Combattant[] = [];
  public listChampions : Combattant[] = [];
  public listRegionsDisponibles : Region[];
  public listRegionsValidees : Region[] = [];
  public selectedRegion : Region

  constructor(
  ) 
  {
    this.selectedRegion = new Region('',[]);
  }

  ngOnInit() 
  {
    this.listRegionsDisponibles = REGIONS;
  }

  public verifSiRegionValide()
  {
    if(this.selectedRegion.combattants.length == 4)
    {
      console.log("Region Validée : "+ this.selectedRegion.name);
      this.listRegionsValidees.push(this.selectedRegion);
      this.removeRegionFromArray(this.selectedRegion);
      return true;
    }
    return false;
  }

  public addCombattant(name :string, champion : boolean)
  {
    let newCombattant : Combattant = new Combattant();
    newCombattant.name = name;
    newCombattant.champion = champion.valueOf();
    if(this.selectedRegion.name.length != 0)
    {
      console.log("nom= "+newCombattant.name +" || champion= "+newCombattant.champion);
      
      if(!this.verifSiRegionValide())
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
        let index = this.listRegionsDisponibles.findIndex(region => 
          {
            return region.name === this.selectedRegion.name;
          });
        //this.listRegionsDisponibles[index].addCombattantToRegion(newCombattant);
        this.verifSiRegionValide();
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
      this.removeChampionFromArray(champion);
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
    let index = this.listRegionsDisponibles.findIndex(region =>
    {
      return region.name === this.selectedRegion.name
    });
    this.selectedRegion.combattants = this.listRegionsDisponibles[index].combattants;
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
    let resultat = this.listCombattants.filter(data => 
      {
        console.log('Retrait de : ' + combattantTire.name);
        return data.name !== combattantTire.name;
      });
    this.listCombattants = resultat;
  }

  removeChampionFromArray(champion)
  {
    let resultat = this.listChampions.filter(data => 
      {
        console.log('Retrait de : ' + champion.name);
        return data.name !== champion.name;
      });
    this.listChampions = resultat;
  }

  /**
   * 
   * @param selectedRegion 
   */
  removeRegionFromArray(selectedRegion)
  {
    let resultat = this.listRegionsDisponibles.filter(data =>
    {
      console.log(data.name);
      return data.name !== selectedRegion.name;
    });
    this.listRegionsDisponibles = resultat;
    //this.selectedRegion = new Region('',[]);
    //console.log(resultat);
  }
}
