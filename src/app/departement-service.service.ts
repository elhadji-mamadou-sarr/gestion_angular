import { Injectable } from '@angular/core';
import { Departement } from './models/Departement';

@Injectable({
  providedIn: 'root'
})
export class DepartementServiceService {

  departements : Departement[] = [
    {code: 1, nomDept : "TIC", nbrFiliere:6},
    {code: 2, nomDept : "Automobile", nbrFiliere:4},
    {code: 3, nomDept : "Agriculture", nbrFiliere:10}
  ]
  constructor() { }

  getListeDepartement(){
    return this.departements
  }

  ajoutDepartement(dept : Departement) : boolean{
    let apptrouver = false
    this.departements.forEach(a =>{
      if (a.code == dept.code) {
        apptrouver = true
      }
    })
    if (apptrouver) {
      return false
    }
    this.departements.push(dept)
    return false
  }

  modifierDepartement(dept : Departement) :boolean{
    let a : Departement
    for (var i = 0; i < this.departements.length; i++) {
      a = this.departements[i]
      if (dept.code == a.code) {
        this.departements.splice(i, 1, dept)
        return true
      }
    }
    return false
  }


  supprimerDepartement(codeDept : number) :boolean{
    for (let i = 0; i < this.departements.length; i++) {
      if (this.departements[i].code == codeDept) {
        this.departements.splice(i,1)
        return true
      }  
    }
    return false
  }


  rechercheDepartement(x:string | number) :Departement[]{
    let resultat : Departement[] = [];
    this.departements.forEach(a => {
      if (a.code == x || a.nomDept == x || a.nbrFiliere ==x) {
        resultat.push(a)
      }
    });
    return resultat
  }


  rechercherParNum(num : number) : Departement | undefined{
    for (let i = 0; i < this.departements.length; i++) {
      if (this.departements[i].code == num) {
        return this.departements[i];
      }  
    }
    return;
  }


}
