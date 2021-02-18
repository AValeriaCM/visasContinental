import { Not404Component } from './pages/not404/not404.component';
import { Not401Component } from './pages/not401/not401.component';
import { ErrorComponent } from './pages/error/error.component';
import { InicioSesionComponent } from './pages/inicio-sesion/inicio-sesion.component';
import { AgregarConsultorComponent } from './pages/consultor/agregar-consultor/agregar-consultor.component';
import { ConsultorComponent } from './pages/consultor/consultor.component';
import { RegistroConsultoriaComponent } from './pages/registro-consultoria/registro-consultoria.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'registro-venta', component: RegistroConsultoriaComponent},
  {path: 'consultor', component: ConsultorComponent, children : [
    {path: 'agregar', component: AgregarConsultorComponent}
  ]},
  {path: 'inicio-sesion', component: InicioSesionComponent},
  {path: 'error/:status/:message', component: ErrorComponent},
  {path: 'not-401', component: Not401Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
