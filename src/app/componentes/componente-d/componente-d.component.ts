import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente-d',
  templateUrl: './componente-d.component.html',
  styleUrls: ['./componente-d.component.css']
})
export class ComponenteDComponent implements OnInit {

  constructor(private router: Router) { }
  price: any
  nom: any
  tot: any
  ngOnInit(): void {
    this.checkout
    this.pricelog();
    this.nomlog();
    this.totlog();
  }
  checkout(){
    this.router.navigate(['checkout']);
  }
  regresar(){
    this.router.navigate(['']);
  }
  pricelog(){
    this.price=localStorage.getItem('precio')
  }
  nomlog(){
    this.nom=localStorage.getItem('nom')
  }
  totlog(){
    this.tot=localStorage.getItem('tot')
  }
}
