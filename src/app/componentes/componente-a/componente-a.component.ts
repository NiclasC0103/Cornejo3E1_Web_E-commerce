import { LocalizedString } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, ɵɵcontainerRefreshEnd } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente-a',
  templateUrl: './componente-a.component.html',
  styleUrls: ['./componente-a.component.css']
})
export class ComponenteAComponent implements OnInit {

  constructor(private router: Router) { }
  correo: any
  carrovalue: any
  ngOnInit(): void {
    this.correo
    this.correolog()
    this.carrorecu()
  }
  correolog(){
    this.correo=localStorage.getItem('correo')
  }
  carrorecu(){
    this.carrovalue=localStorage.getItem('carro')
  }
  login(){
    this.router.navigate(['login']);
  }
  producto(){
    this.router.navigate(['dior_sa']);
  }
  carrito(){
    this.router.navigate(['cart']);
  }
  clear(){
    localStorage.clear();
    location.reload();
  }
}
