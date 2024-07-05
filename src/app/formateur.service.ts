import { Injectable } from '@angular/core';
import { Formateur } from './models/Formateur';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {

  formateurs : Formateur[] = [];

  constructor() { }

  createFormateur(formateur:Formateur){
    this.formateurs.push(formateur)
  }

  getListFormateur():Formateur[]{
    return this.formateurs
  }

  rechercherParId(numFormateur:number):Formateur | undefined{
    for (let i = 0; i < this.formateurs.length; i++) {
      const formateur = this.formateurs[i]
      if (formateur.numFormateur === numFormateur) {
        return formateur
      }
    }
    return ;
  }


}
