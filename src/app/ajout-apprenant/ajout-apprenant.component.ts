import { Component } from '@angular/core';
import { Apprenant } from '../models/Apprenant';
import { Formateur } from '../models/Formateur';
import { Formation } from '../models/Formation';
import { FormationsService } from '../formations.service';
import { ApprenantsService } from '../apprenants.service';
import { Router } from '@angular/router';
import { Departement } from '../models/Departement';
import { DepartementServiceService } from '../departement-service.service';

@Component({
  selector: 'ajoutapprenant',
  templateUrl: './ajout-apprenant.component.html',
  styleUrls: ['./ajout-apprenant.component.scss']
})
export class AjoutApprenantComponent {
  apprenant:Apprenant={
    id:0,
    nom:"",
    prenom:"",
    adresse:"",
    email:"",
    departement : "",
    filiere : "",
    promotion : ""
  }

  constructor(
    private _serviceFormation : FormationsService,
    private _serviceApprenant : ApprenantsService, 
    private _serviceDepartement : DepartementServiceService,
    private route : Router,
    ){}

  saveApp(){
    this._serviceApprenant.ajoutApprenant(this.apprenant)
    this.route.navigate(['/list-apprenant']);
  }

  getList():Formation[]{
    return this._serviceFormation.getlisteFormation();
  }

  listDepartement():Departement[]{
    return this._serviceDepartement.getListeDepartement();
  }


}
