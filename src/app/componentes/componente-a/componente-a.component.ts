import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente-a',
  templateUrl: './componente-a.component.html',
  styleUrls: ['./componente-a.component.css']
})
export class ComponenteAComponent implements OnInit {

  constructor(private router: Router) { }
  correo: any
  ngOnInit(): void {
    this.correo
    this.correolog()
  }
  correolog(){
    this.correo=localStorage.getItem('correo')
  }
  login(){
    this.router.navigate(['login']);
  }
}
