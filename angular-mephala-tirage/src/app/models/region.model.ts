import { Combattant } from '../models/combattant.model';

export class Region 
{
    public name: string;
    public combattants: Combattant[];

    constructor(name? : string, combattants? : Combattant[])
    {
        this.name = name;
        this.combattants = combattants;
    }

    addCombattantToRegion(combattant:Combattant)
    {
        // Si le Combattants[] n'est pas initalisé : 
        if(this.combattants == undefined)
        {
            this.combattants = [];
        }

        if(this.combattants.length < 4)
        {
            this.combattants.push(combattant);
        }
    }
}
export let REGIONS = [
    new Region('Abel', []),
    new Region('Arlan', []),
    new Region('Dalaborn', []),
    new Region('Kanon', []),
    new Region('Galgados', []),
    new Region('Ilmora', []),
    new Region('Helenia', []),
    new Region('Alberia', []),
    new Region('Goldar', []),
    new Region('Hemdell', []),
    new Region('Haufman', []),
    new Region('Dwänholf', []),
    new Region('Moth', []),
    new Region('Gabriel', []),
    new Region('Phaïon', []),
    new Region('Togarini', []),
    new Region('Remo', []),
    new Region('Bellafonte', []),
    new Region('Domaine', []),
    new Region('Argos', []),
    new Region('Kushistan', []),
    new Region('Stygia', []),
    new Region('Salazar', []),
    new Region('Kashmir', []),
    new Region('Baho', []),
    new Region('Lannet', []),
    new Region('Shivat', []),
    new Region('Lucretio', []),
    new Region('Manterra', []),
    new Region('Arabal', []),
    new Region('Elcia', []),
    new Region('Spheria', []),
  ]