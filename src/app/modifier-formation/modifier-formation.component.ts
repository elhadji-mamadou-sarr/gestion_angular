import { Component } from '@angular/core';
import { Formation } from '../models/Formation';
import { FormationsService } from '../formations.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modifier-formation',
  templateUrl: './modifier-formation.component.html',
  styleUrls: ['./modifier-formation.component.scss']
})
export class ModifierFormationComponent {

  formation:Formation={
    numeroFormation: 0,
    nomFormation:'', 
    description: ''
  }

  
  constructor(
    private _serviceFormation : FormationsService,
    private route : Router,
  ){}

  modifierFormation(){
    this._serviceFormation.modifierformation(this.formation)
    this.route.navigate(['/formations'])
  }
}
