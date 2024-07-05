import { Formation } from "./Formation"

export interface Formateur{

    numFormateur: number
    nom: string
    prenom : string
    email : String
    adresse ?: String
    formation : Formation
}