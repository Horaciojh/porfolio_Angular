import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { DatosPersonalComponent } from './datos-personal/datos-personal.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { TrabajosComponent } from './trabajos/trabajos.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { FooderComponent } from './fooder/fooder.component';
import { ModalLoguinComponent } from './modal-loguin/modal-loguin.component';
import { ModalBannerComponent } from './modal-banner/modal-banner.component';
import { ModalDatosPersonalesComponent } from './modal-datos-personales/modal-datos-personales.component';
import { ModalFotoComponent } from './modal-foto/modal-foto.component';
import { ModalEstudiosComponent } from './modal-estudios/modal-estudios.component';
import { ModalLaboralComponent } from './modal-laboral/modal-laboral.component';
import { ModalSofwareComponent } from './modal-sofware/modal-sofware.component';
import { ModalRrhhComponent } from './modal-rrhh/modal-rrhh.component';
import { ModalProyectosComponent } from './modal-proyectos/modal-proyectos.component';
import { ModalRedesComponent } from './modal-redes/modal-redes.component';
import { ModalMailComponent } from './modal-mail/modal-mail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ModalCurriculumComponent } from './modal-curriculum/modal-curriculum.component';
import { InicioComponent } from './inicio/inicio.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    DatosPersonalComponent,
    EstudiosComponent,
    TrabajosComponent,
    HabilidadesComponent,
    ProyectosComponent,
    FooderComponent,
    ModalLoguinComponent,
    ModalBannerComponent,
    ModalDatosPersonalesComponent,
    ModalFotoComponent,
    ModalEstudiosComponent,
    ModalLaboralComponent,
    ModalSofwareComponent,
    ModalRrhhComponent,
    ModalProyectosComponent,
    ModalRedesComponent,
    ModalMailComponent,
    DashboardComponent,
    ModalCurriculumComponent,
    InicioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
