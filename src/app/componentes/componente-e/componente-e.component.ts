import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-componente-e',
  templateUrl: './componente-e.component.html',
  styleUrls: ['./componente-e.component.css']
})
export class ComponenteEComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  facture(){
    this.router.navigate(['factura']);
  }
}
