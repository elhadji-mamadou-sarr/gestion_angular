import { Component, OnInit } from '@angular/core';
import { Formation } from '../models/Formation';
import { FormationsService } from '../formations.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-formation',
  templateUrl: './detail-formation.component.html',
  styleUrls: ['./detail-formation.component.scss']
})
export class DetailFormationComponent implements OnInit{

  constructor(
    private route:ActivatedRoute, 
    private redirect:Router, 
    private _serviceformation : FormationsService){}

  formation : Formation = {
    numeroFormation : 21, 
    nomFormation:"Dev Back-end", 
    description:"Programmation back-end"};
    
    ngOnInit(): void {
      this.formation.numeroFormation = Number(this.numFor)
      this.numFor = this.route.snapshot.queryParamMap.get('num')
    }

    numFor : string | null | undefined;

    supprimerFormation(){
      if (this.numFor !== null && this.numFor !== undefined) {
        const numeroApp = parseInt(this.numFor) ;
        if (this._serviceformation.supprimerFormation(numeroApp)){
          alert('Formation numero '+numeroApp+" a ete supprimer")
          this.redirect.navigate(['/formations'])
        }else
        alert('Formation numero '+numeroApp+' non supprimer')
        this.redirect.navigate(['/formations'])
      }else
      alert('Numero indefinie ou nul')
      this.redirect.navigate(['/formations'])
    }


}
