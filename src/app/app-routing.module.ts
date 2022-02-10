import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './contenedor/paginas/inicio/inicio.component';
import { ContactoComponent } from './contenedor/paginas/contacto/contacto.component';
import { QuienesSomosComponent } from './contenedor/paginas/quienes-somos/quienes-somos.component';
import { ServiciosComponent } from './contenedor/paginas/servicios/servicios/servicios.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  {
    path:"inicio", component:InicioComponent
  },
  {
    path:"contacto", component:ContactoComponent
  },
  {
    path:"quienes-somos", component:QuienesSomosComponent
  },
  {
    path:"servicios", component:ServiciosComponent
  },
  {
    path:"login", component:LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
