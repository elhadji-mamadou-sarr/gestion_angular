import { Component } from '@angular/core';
import { Formation } from '../models/Formation';
import { FormationsService } from '../formations.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-formation',
  templateUrl: './list-formation.component.html',
  styleUrls: ['./list-formation.component.scss']
})
export class ListFormationComponent {
  formations : Formation[] = []

  constructor(
    private _serviceformations : FormationsService,
    private route : Router
    ){}

  ngOnInit(): void {
    this.formations = this._serviceformations.getlisteFormation()
  }

  supprimerFormation( num : number){
    if (this._serviceformations.supprimerFormation(num)) {
      alert("La formation numero "+num+" a ete supprimer avec succes")
      this.route.navigate(['/formations'])
    }else
      alert('Echec de la suppression de la formation numero '+num)
    // Mise à jours liste des apprenants
    this.formations=this._serviceformations.getlisteFormation()
  }


}
