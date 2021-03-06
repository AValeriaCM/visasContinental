import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './_material/material/material.module';

import { AppSettings } from './app.settings';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistroConsultoriaComponent } from './pages/registro-consultoria/registro-consultoria.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { OverlayContainer } from '@angular/cdk/overlay';
import { CustomOverlayContainer } from './theme/utils/custom-overlay-container';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { AgregarConsultorComponent } from './pages/consultor/agregar-consultor/agregar-consultor.component';
import { ConsultorComponent } from './pages/consultor/consultor.component';
import { InicioSesionComponent } from './pages/inicio-sesion/inicio-sesion.component';
import { ErrorComponent } from './pages/error/error.component';
import { Not401Component } from './pages/not401/not401.component';
import { Not404Component } from './pages/not404/not404.component';
import { HttpClientModule } from '@angular/common/http';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  wheelPropagation: true,
  suppressScrollX: true               
};

@NgModule({
  declarations: [
    AppComponent,
    RegistroConsultoriaComponent,
    InicioComponent,
    AgregarConsultorComponent,
    ConsultorComponent,
    InicioSesionComponent,
    ErrorComponent,
    Not401Component,
    Not404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PerfectScrollbarModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AppSettings,
    { provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG },
    { provide: OverlayContainer, useClass: CustomOverlayContainer }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
