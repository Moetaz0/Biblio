import { Authors } from "../authors/authors"
import { Publisher } from "../publisher/publisher"
import { Specialities } from "../specialities/specialities"

export class Book {
    _id:object
    isbn:string
    titre:string
    annedition:number
    prix:number
    qtestock:number
    couverture:any
    specialite:Specialities;
    maised:Publisher
    auteurs:Authors[]
    constructor() {
        this.specialite = new Specialities();
        this.auteurs = [];
        this.maised=new Publisher();
      }



}
