import { Combattant } from '../models/combattant.model';

export let REGIONS = [
    {name : 'Abel', combattants : [{} as Combattant]},
    {name : 'Arlan', combattants : [{} as Combattant]},
    {name : 'Dalaborn', combattants : [{} as Combattant]},
    {name : 'Kanon', combattants : [{} as Combattant]},
    {name : 'Galgados', combattants : [{} as Combattant]},
    {name : 'Ilmora', combattants : [{} as Combattant]},
    {name : 'Helenia', combattants : [{} as Combattant]},
    {name : 'Alberia', combattants : [{} as Combattant]},
    {name : 'Goldar', combattants : [{} as Combattant]},
    {name : 'Hemdell', combattants : [{} as Combattant]},
    {name : 'Haufman', combattants : [{} as Combattant]},
    {name : 'Dwänholf', combattants : [{} as Combattant]},
    {name : 'Moth', combattants : [{} as Combattant]},
    {name : 'Gabriel', combattants : [{} as Combattant]},
    {name : 'Phaïon', combattants : [{} as Combattant]},
    {name : 'Togarini', combattants : [{} as Combattant]},
    {name : 'Remo', combattants : [{} as Combattant]},
    {name : 'Bellafonte', combattants : [{} as Combattant]},
    {name : 'Domaine', combattants : [{} as Combattant]},
    {name : 'Argos', combattants : [{} as Combattant]},
    {name : 'Kushistan', combattants : [{} as Combattant]},
    {name : 'Stygia', combattants : [{} as Combattant]},
    {name : 'Salazar', combattants : [{} as Combattant]},
    {name : 'Kashmir', combattants : [{} as Combattant]},
    {name : 'Baho', combattants : [{} as Combattant]},
    {name : 'Lannet', combattants : [{} as Combattant]},
    {name : 'Shivat', combattants : [{} as Combattant]},
    {name : 'Lucretio', combattants : [{} as Combattant]},
    {name : 'Manterra', combattants : [{} as Combattant]},
    {name : 'Arabal', combattants : [{} as Combattant]},
    {name : 'Elcia', combattants : [{} as Combattant]},
    {name : 'Spheria', combattants : [{} as Combattant]},
  ]

export class Region 
{
    public name: string;
    public combattants: Combattant[];

    constructor(name? : string, combattants? : Combattant[])
    {
        this.name = name;
        this.combattants = combattants;
    }


}
