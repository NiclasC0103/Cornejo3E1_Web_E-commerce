import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponenteAComponent } from './componentes/componente-a/componente-a.component';
import { ComponenteBComponent } from './componentes/componente-b/componente-b.component';
import { ComponenteCComponent } from './componentes/componente-c/componente-c.component';
import { ComponenteDComponent } from './componentes/componente-d/componente-d.component';
import { ComponenteEComponent } from './componentes/componente-e/componente-e.component';
import { ComponenteFComponent } from './componentes/componente-f/componente-f.component';


const routes: Routes = [
  { path: '', component: ComponenteAComponent },
  { path: 'login', component: ComponenteBComponent },
  { path: 'dior_sa', component: ComponenteCComponent },
  { path: 'cart', component: ComponenteDComponent },
  { path: 'checkout', component: ComponenteEComponent },
  { path: 'nouser', component: ComponenteFComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
