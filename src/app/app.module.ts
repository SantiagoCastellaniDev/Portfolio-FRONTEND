import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavComponent } from './components/nav/nav.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FooterComponent } from './components/footer/footer.component';

import { BotonEditarComponent } from './components/edicion/boton-editar/boton-editar.component';
import { BotonBorrarComponent } from './components/edicion/boton-borrar/boton-borrar.component';
import { BotonAgregarComponent } from './components/edicion/boton-agregar/boton-agregar.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BotonLoginComponent } from './components/login/boton-login/boton-login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { interceptorProvider } from './interceptors/interceptor.service';


import { IniciarSesionComponent } from './components/login/iniciar-sesion/iniciar-sesion.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    EducacionComponent,
    ExperienciaComponent,
    ProyectosComponent,
    SidebarComponent,
    SkillsComponent,
    ContactoComponent,
    BotonEditarComponent,
    BotonBorrarComponent,
    BotonAgregarComponent,
    FooterComponent,
    BotonLoginComponent,
    PortfolioComponent,
    IniciarSesionComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule    
  ],
  
  providers: [interceptorProvider],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
