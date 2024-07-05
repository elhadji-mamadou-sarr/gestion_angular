import { Component, OnInit } from '@angular/core';
import { Departement } from '../models/Departement';
import { DepartementServiceService } from '../departement-service.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-list-departement',
  templateUrl: './list-departement.component.html',
  styleUrls: ['./list-departement.component.scss']
})
export class ListDepartementComponent implements OnInit{

  departements : Departement[] =[]

  constructor(
    private _serviceDepartement : DepartementServiceService,
    private route : Router
  ){}

  ngOnInit(): void {
    this.departements = this._serviceDepartement.getListeDepartement();
  }

  supprimerDept(num : number){
    if (this._serviceDepartement.supprimerDepartement(num)) {
      alert("Vous allez supprimer le departement "+num)
      this.route.navigate(['/listDepartement'])
    }else
      alert("Echec de la suppression")

  }



}
