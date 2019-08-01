import { Region } from '../models/region.model';

export class Combattant
{
    name: string;
    region : string
    champion: boolean;

    constructor(name? :string, region? :string, champion? : boolean)
    {
        this.name = name;
        this.region = region;
        this.champion = champion;
    }
}
