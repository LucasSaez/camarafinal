import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimengModules } from './primeng-modules';

//firebase
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import {AngularFireStorageModule} from '@angular/fire/compat/storage'

//PrimeNG
import {AccordionModule} from 'primeng/accordion';
import { InicioComponent } from './contenedor/paginas/inicio/inicio.component';
import { QuienesSomosComponent } from './contenedor/paginas/quienes-somos/quienes-somos.component';
import { ContactoComponent } from './contenedor/paginas/contacto/contacto.component';
import { ServiciosComponent } from './contenedor/paginas/servicios/servicios/servicios.component';
import { LoginComponent } from './auth/login/login.component';
import { environment } from 'src/environments/environment';

//formulario reactivos

import {ReactiveFormsModule} from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    QuienesSomosComponent,
    ContactoComponent,
    ServiciosComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PrimengModules,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireStorageModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }