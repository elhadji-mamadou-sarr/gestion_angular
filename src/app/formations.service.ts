import { Injectable } from '@angular/core';
import { Formation } from './models/Formation';

@Injectable({
  providedIn: 'root'
})
export class FormationsService {

  formations : Formation[] = [
    {numeroFormation: 1, nomFormation:'Dev Wed', description: 'Developpement web et mobile'},
    {numeroFormation: 2, nomFormation:'MDG', description: 'Marketing Digital'},
    {numeroFormation: 3, nomFormation:'Dev Wed', description: 'Developpement web et mobile'},
    {numeroFormation: 4, nomFormation:'Analyse Wed', description: 'Developpement web et mobile'},
    {numeroFormation: 5, nomFormation:'Genie Wed', description: 'Developpement web et mobile'}
  ]

  constructor() { }

  getlisteFormation() : Formation[]{
    return this.formations
  }

  ajouterFormation(formt : Formation) : boolean{
    let apptrouver = false
    this.formations.forEach(a =>{
      if (a.numeroFormation == formt.numeroFormation) {
        apptrouver = true
      }
    })

    if (apptrouver) {
      return false
    }

    this.formations.push(formt)
    return false
  }
  

  modifierformation(formt : Formation) :boolean{
    let f : Formation
    for (var i = 0; i < this.formations.length; i++) {
      f = this.formations[i]
      if (formt.numeroFormation == f.numeroFormation) {
        this.formations.splice(i, 1, formt)
        return true
      }
    }
    return false
  }
  
  
  supprimerFormation(numFor : number) :boolean{
    for (let i = 0; i < this.formations.length; i++) {
      if (this.formations[i].numeroFormation == numFor) {
        this.formations.splice(i,1)
        return true
      }  
    }
    return false
  }
  
  
    recherche(x:string | number) :Formation[]{
      let resultat : Formation[] = [];
      this.formations.forEach(fmt => {
        if (fmt.numeroFormation == x || fmt.nomFormation == x || fmt.description ==x) {
          resultat.push(fmt)
        }
      });
      return resultat
    }

  
  rechercherParNum(numfor : number) : Formation | undefined{
    for (let i = 0; i < this.formations.length; i++) {
      if (this.formations[i].numeroFormation == numfor) {
        return this.formations[i];
      }  
    }
    return;
  }




}
