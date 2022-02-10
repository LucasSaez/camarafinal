import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';                  //api  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'camarafinal';
  items!: MenuItem[];

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
                
            },
            {
                label:'LOGIN',
                icon:'pi pi-fw',
                styleClass: 'BotonLogin',
                routerLink:"login"
                
            },
        ];
    }
}
