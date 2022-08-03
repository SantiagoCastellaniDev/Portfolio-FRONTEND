import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HeaderComponent } from './components/header/header.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavComponent } from './components/nav/nav.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { SkillsComponent } from './components/skills/skills.component';
import { FooterComponent } from './components/footer/footer.component';

import { BotonEditarComponent } from './components/edicion/boton-editar/boton-editar.component';
import { BotonBorrarComponent } from './components/edicion/boton-borrar/boton-borrar.component';
import { BotonAgregarComponent } from './components/edicion/boton-agregar/boton-agregar.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BotonLoginComponent } from './components/login/boton-login/boton-login.component';
import { LoginComponent } from './components/login/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { InterceptorService } from './services/interceptor.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaDeComponent,
    NavComponent,
    EducacionComponent,
    ExperienciaComponent,
    ProyectosComponent,
    SidebarComponent,
    SkillsComponent,
    BotonEditarComponent,
    BotonBorrarComponent,
    BotonAgregarComponent,
    FooterComponent,
    BotonLoginComponent,
    LoginComponent,
    PortfolioComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule    
  ],
  
  providers: [{provide: HTTP_INTERCEPTORS,useClass:InterceptorService, multi:true}],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
