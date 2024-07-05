import { Component } from '@angular/core';
import { Formation } from '../models/Formation';
import { FormationsService } from '../formations.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-formation',
  templateUrl: './ajout-formation.component.html',
  styleUrls: ['./ajout-formation.component.scss']
})
export class AjoutFormationComponent {

  formation:Formation={
    numeroFormation: 0,
     nomFormation:'', 
     description: ''
  }

  
  constructor(
    private _serviceFormation : FormationsService,
    private route : Router,
  ){}

  saveFormation(){
    this._serviceFormation.ajouterFormation(this.formation)
    this.route.navigate(['/formations'])
  }

}
