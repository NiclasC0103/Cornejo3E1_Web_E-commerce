import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenteAComponent } from './componentes/componente-a/componente-a.component';
import { ComponenteBComponent } from './componentes/componente-b/componente-b.component';
import { ComponenteCComponent } from './componentes/componente-c/componente-c.component';
import { ComponenteDComponent } from './componentes/componente-d/componente-d.component';
import { ComponenteEComponent } from './componentes/componente-e/componente-e.component';
import { ComponenteFComponent } from './componentes/componente-f/componente-f.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteAComponent,
    ComponenteBComponent,
    ComponenteCComponent,
    ComponenteDComponent,
    ComponenteEComponent,
    ComponenteFComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
