import { Component, OnInit } from '@angular/core';
import { Apprenant } from '../models/Apprenant';
import { ApprenantsService } from '../apprenants.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-list-apprenant',
  templateUrl: './list-apprenant.component.html',
  styleUrls: ['./list-apprenant.component.scss']
})

export class ListApprenantComponent implements OnInit{
  apprenants : Apprenant[] = [];

  constructor(
    private _serviceApprenants : ApprenantsService,
    private route : Router
    ){}

  ngOnInit(): void {
    this.apprenants = this._serviceApprenants.getListeApprenant()
  }

  supprimerApprenant( num : number){
    if (this._serviceApprenants.supprimerApprenant(num)) {
      alert("L'apprenant numero "+num+" a ete supprimer avec succe")
      this.route.navigate(['/list-apprenant'])
    }else
      alert('Echec de la suppression de l\'apprenant numero '+num)
    // Mise à jours liste des apprenants
    this.apprenants=this._serviceApprenants.getListeApprenant()
  }


}