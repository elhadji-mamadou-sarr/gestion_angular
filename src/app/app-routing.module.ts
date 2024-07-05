import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AjoutApprenantComponent } from './ajout-apprenant/ajout-apprenant.component';
import { ListApprenantComponent } from './list-apprenant/list-apprenant.component';
import { DetailComponent } from './detail/detail.component';
import { ListFormationComponent } from './list-formation/list-formation.component';
import { DetailFormationComponent } from './detail-formation/detail-formation.component';
import { AjouertFormateurComponent } from './ajouert-formateur/ajouert-formateur.component';
import { ListFormateurComponent } from './list-formateur/list-formateur.component';
import { ModifierFormateurComponent } from './modifier-formateur/modifier-formateur.component';
import { AjoutFormationComponent } from './ajout-formation/ajout-formation.component';
import { ListDepartementComponent } from './list-departement/list-departement.component';
import { AjoutDepartementComponent } from './ajout-departement/ajout-departement.component';
import { ModifierFormationComponent } from './modifier-formation/modifier-formation.component';

const routes: Routes = [
  {path:"",component:AccueilComponent},
  {path:"ajoutapprenant",component:AjoutApprenantComponent},
  {path:"list-apprenant",component:ListApprenantComponent},
  {path:"detail",component:DetailComponent},

  {path:"formations",component:ListFormationComponent},
  {path:"detailFormation",component:DetailFormationComponent},
  {path:"ajoutFormation",component:AjoutFormationComponent},
  {path:"modifierFormation",component:ModifierFormationComponent},

  {path:"ajouterFormateur",component:AjouertFormateurComponent},
  {path:"listFormateur",component:ListFormateurComponent},
  {path:"modifierFormateur",component:ModifierFormateurComponent},
  
  {path:"listDepartement",component:ListDepartementComponent},
  {path:"ajoutDepartement",component:AjoutDepartementComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
