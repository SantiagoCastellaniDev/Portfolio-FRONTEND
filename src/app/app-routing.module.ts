import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { LoginComponent } from './components/login/login/login.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';

const routes: Routes = [
  {path:'portfolio', component:PortfolioComponent},
  {path:'login', component:LoginComponent},
  {path: '', redirectTo: '/portfolio', pathMatch: 'full'},  

/* Ejemplo de ruta children
  {path:'portfolio', component:PortfolioComponent,
children:[{path:'experiencia',component:ExperienciaComponent}]},
*/

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
