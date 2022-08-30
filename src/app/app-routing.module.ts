import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { IniciarSesionComponent } from './components/login/iniciar-sesion/iniciar-sesion.component';


const routes: Routes = [
  {path:'portfolio', component:PortfolioComponent},
  {path:'login', component:IniciarSesionComponent},
  {path: '', redirectTo: '/portfolio', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
