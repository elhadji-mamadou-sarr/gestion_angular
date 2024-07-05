import { Component } from '@angular/core';
import { Departement } from '../models/Departement';
import { DepartementServiceService } from '../departement-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-departement',
  templateUrl: './ajout-departement.component.html',
  styleUrls: ['./ajout-departement.component.scss']
})
export class AjoutDepartementComponent {
  departement:Departement={
    code: 0,
    nomDept:'', 
    nbrFiliere: 0
  }

  
  constructor(
    private _serviceFormation : DepartementServiceService,
    private route : Router,
  ){}

  saveDepartement(){
    this._serviceFormation.ajoutDepartement(this.departement)
    this.route.navigate(['/listDepartement'])
  }
}
