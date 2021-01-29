import { RegistroConsultoriaComponent } from './pages/registro-consultoria/registro-consultoria.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'registroConsultoria', component: RegistroConsultoriaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
