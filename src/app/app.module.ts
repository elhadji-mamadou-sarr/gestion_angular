import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AjoutApprenantComponent } from './ajout-apprenant/ajout-apprenant.component';
import { MenuComponent } from './menu/menu.component';
import { ListApprenantComponent } from './list-apprenant/list-apprenant.component';
import { DetailComponent } from './detail/detail.component';
import { ListFormationComponent } from './list-formation/list-formation.component';
import { DetailFormationComponent } from './detail-formation/detail-formation.component';
import { AjoutFormationComponent } from './ajout-formation/ajout-formation.component';
import { ModifierFormationComponent } from './modifier-formation/modifier-formation.component';
import { ListFormateurComponent } from './list-formateur/list-formateur.component';
import { AjouertFormateurComponent } from './ajouert-formateur/ajouert-formateur.component';
import { ModifierFormateurComponent } from './modifier-formateur/modifier-formateur.component';
import { ListDepartementComponent } from './list-departement/list-departement.component';
import { AjoutDepartementComponent } from './ajout-departement/ajout-departement.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    AjoutApprenantComponent,
    MenuComponent,
    ListApprenantComponent,
    DetailComponent,
    ListFormationComponent,
    DetailFormationComponent,
    AjoutFormationComponent,
    ModifierFormationComponent,
    ListFormateurComponent,
    AjouertFormateurComponent,
    ModifierFormateurComponent,
    ListDepartementComponent,
    AjoutDepartementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
