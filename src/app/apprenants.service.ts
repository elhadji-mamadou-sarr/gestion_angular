import { Injectable } from '@angular/core';
import { Apprenant } from './models/Apprenant';

@Injectable({
  providedIn: 'root'
})
export class ApprenantsService {
  apprenants : Apprenant[] = [
    { id: 1, 
      nom:'El hadji', 
      prenom:'Sarr', 
      adresse:'Diamniadio',
      email:'elhadji@gmail.com', 
      departement:'TIC', 
      filiere:'DBE', 
      promotion:'3' },

    { id: 2, nom:'Cheikh', 
    prenom:'Ndao', 
    adresse:'SG',
    email:'cheikh@gmail.com', 
    departement:'TIC', 
    filiere:'APD',
     promotion:'3' },

    { id: 3, 
      nom:'Talla', 
      prenom:'Sall', 
      adresse:'Diamniadio',
      email:'talla@gmail.com', 
      departement:'TIC', 
      filiere:'HFO', 
      promotion:'3' },

    { id: 4, 
      nom:'Massour', 
      prenom:'Fall', 
      adresse:'Diamniadio',
      email:'talla@gmail.com', 
      departement:'TIC', 
      filiere:'RIOT', 
      promotion:'3' },
     
  ];
  constructor() { }

  getListeApprenant(): Apprenant[] {
    return this.apprenants;
  }


  ajoutApprenant(app : Apprenant) : boolean{
    let apptrouver = false
    this.apprenants.forEach(a =>{
      if (a.id == app.id) {
        apptrouver = true
      }
    })
    if (apptrouver) {
      return false
    }
    this.apprenants.push(app)
    return false
  }

  modifierApprenant(app : Apprenant) :boolean{
    let a : Apprenant
    for (var i = 0; i < this.apprenants.length; i++) {
      a = this.apprenants[i]
      if (app.id == a.id) {
        this.apprenants.splice(i, 1, app)
        return true
      }
    }
    return false
  }


  supprimerApprenant(idApp : number) :boolean{
    for (let i = 0; i < this.apprenants.length; i++) {
      if (this.apprenants[i].id == idApp) {
        this.apprenants.splice(i,1)
        return true
      }  
    }
    return false
  }


  recherche(x:string | number) :Apprenant[]{
    let resultat : Apprenant[] = [];
    this.apprenants.forEach(a => {
      if (a.id == x || a.nom == x || a.prenom ==x) {
        resultat.push(a)
      }
    });
    return resultat
  }


  rechercherParNum(num : number) : Apprenant | undefined{
    for (let i = 0; i < this.apprenants.length; i++) {
      if (this.apprenants[i].id == num) {
        return this.apprenants[i];
      }  
    }
    return;
  }


}
