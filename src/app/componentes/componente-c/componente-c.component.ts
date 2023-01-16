import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente-c',
  templateUrl: './componente-c.component.html',
  styleUrls: ['./componente-c.component.css']
})
export class ComponenteCComponent implements OnInit {

  constructor(private router: Router) { }
  carrovalue:any
  price: any
  nom: any
  tot: any
  ngOnInit(): void {
    this.carrolog();
    this.pricelog();
    this.nomlog();
    this.totlog();
  }
  carrolog(){
    this.carrovalue=localStorage.setItem('carro', "1")
  }
  pricelog(){
    this.price=localStorage.setItem('precio', "$189.00")
  }
  nomlog(){
    this.nom=localStorage.setItem('nom', "DIOR Sauvage")
  }
  totlog(){
    this.tot=localStorage.setItem('tot', "$224.00")
  }
}
