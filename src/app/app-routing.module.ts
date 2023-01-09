import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponenteAComponent } from './componentes/componente-a/componente-a.component';
import { ComponenteBComponent } from './componentes/componente-b/componente-b.component';
import { ComponenteCComponent } from './componentes/componente-c/componente-c.component';


const routes: Routes = [
  { path: '', component: ComponenteAComponent },
  { path: 'login', component: ComponenteBComponent },
  { path: 'dior_sa', component: ComponenteCComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
