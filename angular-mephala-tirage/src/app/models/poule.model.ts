import { Combattant } from './combattant.model';

export class Poule 
{
    public numero: number;
    public champion: Combattant;
    public combattants: Combattant[];
    public valide:boolean = false;

    constructor(numero : number, champion? : Combattant, combattants? : Combattant[])
    {
        this.numero = numero;
        this.champion = champion;
        this.combattants = combattants;
    }

    // Une Poule est valide si elle a son champion et 3 autres combattants. (4 noms en tout)
    public testIfValide()
    {
        if(this.champion != null && this.combattants.length == 3)
        {
            this.valide = true;
        }
    }
}
