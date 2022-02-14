import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';                  //api  
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private auth: AuthService) {}
  title = 'camarafinal';
  items!: MenuItem[];
  logueado: boolean = false;


    ngOnInit() {
        this.items = [
            {
                label:'INICIO',
                icon:'pi pi-fw pi-home',
                routerLink:"inicio"

            },
            {
                label:'SERVICIOS',
                icon:'pi pi-fw pi-pencil',
                routerLink:"servicios"
               
            },
            {
                label:'QUIÉNES SOMOS',
                icon:'pi pi-fw pi-calendar',
                routerLink:"quienes-somos"
            },
            {
                label:'CONTACTO',
                icon:'pi pi-fw pi-user',
                routerLink:"contacto"
                
            }
        ];

        if(this.logueado){
            this.items[4]={
                label:'CERRAR SESION',
                 routerLink:'inicio'
            }
         }
        else{
            this.items[4]={
                label:'LOGIN',
                routerLink:'login'
            }
        }
    }


   
}
