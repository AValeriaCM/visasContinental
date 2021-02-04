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
    {path: 'agregar-consultor', component: AgregarConsultorComponent},
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
