import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { PersonaComponentComponent } from './persona-component/persona-component.component';
import { BarcoComponentComponent } from './barco-component/barco-component.component';
import { SalidaComponentComponent } from './salida-component/salida-component.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormCreaPersonaComponent } from './formularios/form-crea-persona/form-crea-persona.component';
import { FormCreaBarcoComponentComponent } from './formularios/form-crea-barco/form-crea-barco-component/form-crea-barco-component.component';

const routes: Routes = [
  {path: '', redirectTo: '/personas', pathMatch:'full'},
  {path: 'personas', component:PersonaComponentComponent},
  {path: 'barcos', component:BarcoComponentComponent},
  {path: 'salidas', component:SalidaComponentComponent},
  {path: 'personas/form', component:FormCreaPersonaComponent},
  {path: 'personas/form/:id', component:FormCreaPersonaComponent},
  {path: 'barcos/form', component:FormCreaBarcoComponentComponent},
  {path: 'barcos/form/:id', component:FormCreaBarcoComponentComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    PersonaComponentComponent,
    BarcoComponentComponent,
    SalidaComponentComponent,
    FormCreaPersonaComponent,
    FormCreaBarcoComponentComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
