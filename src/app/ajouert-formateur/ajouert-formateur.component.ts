import { Component } from '@angular/core';
import { Formateur } from '../models/Formateur';

@Component({
  selector: 'app-ajouert-formateur',
  templateUrl: './ajouert-formateur.component.html',
  styleUrls: ['./ajouert-formateur.component.scss']
})
export class AjouertFormateurComponent {
  borderForm ="solid balck 1px";
  formOk = false
  styleTitle={
    'form-header': true,
    "text-center": true,
    "bg-primary": this.formOk,
    "bg-light":true, 
    "bg-danger":this.formOk, 
  }

  formateur : Formateur = {
    numFormateur:0,
    nom:"",
    prenom:"",
    email:"",
    formation:{numeroFormation:0, nomFormation: "",description:""}
  }
  
}
