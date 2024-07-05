import { Component, OnInit } from '@angular/core';
import { Apprenant } from '../models/Apprenant';
import { ActivatedRoute, Router } from '@angular/router';
import { ApprenantsService } from '../apprenants.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit{
  
  apprenant : Apprenant={id: 1, nom:'El hadji', prenom:'Sarr', adresse:'Diamniadio', email:'elhadji@gmail.com',
  departement:'TIC', filiere:'DBE', promotion:'3'};
  
  
  numApp: string |null | undefined;
  
  constructor(
    private route:ActivatedRoute,
    private _serviceApprenant : ApprenantsService,
    private redirect : Router){

  }

  ngOnInit(): void {
    this.apprenant.id=Number(this.numApp)
    this.numApp = this.route.snapshot.queryParamMap.get('num')
  }

  supprimerApp(){
    if (this.numApp !== null && this.numApp !== undefined) {
      const numeroApp = parseInt(this.numApp) ;
      if (this._serviceApprenant.supprimerApprenant(numeroApp)){
        alert('Apprenant numero '+numeroApp+" a ete supprimer")
        this.redirect.navigate(['/list-apprenant'])
      }else
      alert('Apprenant numero '+numeroApp+' non supprimer')
      this.redirect.navigate(['/list-apprenant'])
    }else
    alert('Numero indefinie ou nul')
    this.redirect.navigate(['/list-apprenant'])
  }

}
