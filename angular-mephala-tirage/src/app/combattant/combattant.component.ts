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
  public tirageValide : boolean;


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

  public alimente()
  {
    this.generateChambpionStub();
    this.generateCombattantStub();
  }
  public generateChambpionStub()
  {
    for(let myRegion of this.listRegionsDisponibles)
    {
      this.listChampions.push(new Combattant('Cha'+myRegion.name, myRegion.name, true));
      myRegion.addCombattantToRegion(this.listChampions[this.listChampions.length-1]);
      let index = this.listRegionsDisponibles.findIndex(region => 
      {
        return region.name === myRegion.name;
      });
      this.verifSiRegionValide();
    }
  }
  
  public generateCombattantStub()
  {
    for(let myRegion of this.listRegionsDisponibles)
    {
      for(let i = 0; i <= 2; i++)
      {
        this.listCombattants.push(new Combattant('Guer'+myRegion.name, myRegion.name, false));
        myRegion.addCombattantToRegion(this.listCombattants[this.listCombattants.length-1]);
        let index = this.listRegionsDisponibles.findIndex(region => 
        {
          return region.name === myRegion.name;
        });
        this.verifSiRegionValide();
      }
    }
  }

  public isRegionFull( region : Region )
  {
    return region.combattants.length == 4
  }

  public verifSiRegionValide()
  {
    for(let myRegion of this.listRegionsDisponibles)
    {
      if(myRegion.combattants.length == 4)
      {
        console.log("Region Validée : "+ myRegion.name);
  
        let index = this.listRegionsDisponibles.findIndex(data => 
        {
          return data.name === myRegion.name;
        })
        this.listRegionsValidees.push(this.listRegionsDisponibles[index]);
        this.removeRegionFromArray(myRegion);
        return true;
      }
      return false;
    }
  }

  public addCombattant(name :string, champion : boolean)
  {
    let newCombattant : Combattant = new Combattant();
    newCombattant.name = name;
    newCombattant.champion = champion.valueOf();
    if(this.selectedRegion.name.length != 0)
    {
      console.log("nom= "+newCombattant.name +" || champion= "+newCombattant.champion);
      
      if(!this.isRegionFull(this.selectedRegion))
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
    this.listPoules = [] as Poule[];

    // Pour chacune des champions de région on crée une poule
    let i : number = 0;
    for (let champion of this.listChampions)
    {
      console.log("Poule N°) " + i);
      //let nouvellePoule : Poule = new Poule(i);
      this.listPoules.push(new Poule(i));
      this.listPoules[i].champion = champion;
      this.listPoules[i].combattants = [] as Combattant[];

      i+=1;
    }
    // Tirage de tous les combattants.
    for(let combattant of this.listCombattants)
    {  
      // Tirage de trois combattants dans la liste de tous les combattants.
      console.log(this.checkAvailablePouleFor(this.listCombattants[0]));
      let listPouleNumber : number[] = this.checkAvailablePouleFor(combattant);
      
      if(listPouleNumber.length == 0)
      {
        return;//this.tirageValide=false;
      }
      let indice = Math.floor(Math.random()*listPouleNumber.length);
      /*
      * indice = [1..N] parmis les poules possibles
      * listPouleNumber[indice] = [1...32] numéro de la poule tirée
      */
      this.listPoules[listPouleNumber[indice]].combattants.push(combattant);
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
      {
        return false;
      }
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

  public checkAvailablePouleFor(combattant)
  {
    let myArray : number[] = []
    for(let poule of this.listPoules)
    {
      let valid = true;
      let nbCombattantPoule = poule.combattants.length;
      if (nbCombattantPoule == 4) 
      {
        valid = false;
      } 
      else
      {
        for(let combattantDejaDansPoule of poule.combattants)
        {
          if(combattantDejaDansPoule.region === combattant.region)
          {
            valid=false;
          }
        }
      }  
      if (valid)
      {
        myArray.push(poule.numero);
      }
    }
    return myArray;
  }
}