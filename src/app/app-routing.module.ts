import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponenteAComponent } from './componentes/componente-a/componente-a.component';
import { ComponenteBComponent } from './componentes/componente-b/componente-b.component';


const routes: Routes = [
  { path: '', component: ComponenteAComponent },
  { path: 'login', component: ComponenteBComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
