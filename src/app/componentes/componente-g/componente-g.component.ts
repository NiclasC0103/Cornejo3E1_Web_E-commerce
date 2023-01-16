import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-g',
  templateUrl: './componente-g.component.html',
  styleUrls: ['./componente-g.component.css']
})
export class ComponenteGComponent implements OnInit {

  constructor() { }
  correo: any
  nom: any
  price: any
  tot: any
  ngOnInit(): void {
    this.recup()
    this.recup2()
    this.recup3()
    this.recup4()
  }
  recup(){
    this.correo=localStorage.getItem("correo")
  }
  recup2(){
    this.nom=localStorage.getItem("nom")
  }
  recup3(){
    this.price=localStorage.getItem("precio")
  }
  recup4(){
    this.tot=localStorage.getItem("tot")
  }
}
