import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavComponent } from './components/nav/nav.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SkillsComponent } from './components/skills/skills.component';
import { BotonEditarComponent } from './components/edicion/boton-editar/boton-editar.component';
import { BotonBorrarComponent } from './components/edicion/boton-borrar/boton-borrar.component';
import { BotonAgregarComponent } from './components/edicion/boton-agregar/boton-agregar.component';
import { FooterComponent } from './components/footer/footer.component';
import { EducacionEditComponent } from './components/modales/educacion-edit/educacion-edit.component';
import { ProyectosEditComponent } from './components/modales/proyectos-edit/proyectos-edit.component';
import { ExperienciaEditComponent } from './components/modales/experiencia-edit/experiencia-edit.component';
import { DeleteeducacionComponent } from './components/modales/deleteeducacion/deleteeducacion.component';

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
    EducacionEditComponent,
    ProyectosEditComponent,
    ExperienciaEditComponent,
    DeleteeducacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
