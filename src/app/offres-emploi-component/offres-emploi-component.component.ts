import { Component, OnInit } from '@angular/core';
import { Emploi } from '../core/model/emploi';
@Component({
  selector: 'app-offres-emploi-component',
  templateUrl: './offres-emploi-component.component.html',
  styleUrls: ['./offres-emploi-component.component.css']
})
export class OffresEmploiComponentComponent implements OnInit {


  listeEmploi!:Emploi[];
  entreprise!:string;
  count!: number;
  constructor() { }

  ngOnInit(): void {

    this.listeEmploi=[
      {reference: "001", titre: "ex1", entreprise:"entreprise1",etat:true},
      {reference: "002", titre: "ex2", entreprise:"entreprise2",etat:false},
      {reference: "003", titre: "ex3", entreprise:"entreprise3",etat:true},
    ]
  }

nb_emploi()
{
  let activelyrecruiting = this.listeEmploi.filter(emploi => emploi.etat == true);
  this.count = activelyrecruiting.length;
  
}
}
