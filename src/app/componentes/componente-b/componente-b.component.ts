import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente-b',
  templateUrl: './componente-b.component.html',
  styleUrls: ['./componente-b.component.css']
})
export class ComponenteBComponent implements OnInit {

  constructor(private router: Router) { }
  correo: any
  pass: any

  ngOnInit(): void {
    this.correo
    this.pass
    this.datos();
  }
  datos(){
    localStorage.setItem('correo', this.correo)
    localStorage.setItem('passw', this.pass)
  }
  regresar(){
    this.router.navigate(['']);
  }
}
