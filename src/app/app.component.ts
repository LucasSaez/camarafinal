import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';                  //api  
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    
public islogged: boolean = false;


  constructor(private auth: AuthService) {}

  title = 'camarafinal';
  items!: MenuItem[];
  

  

    ngOnInit() {

        //verifico el estado del usuario
        this.auth.user.subscribe((user)=>{
          if (user){
            this.islogged = true;
          }
          else{
              this.islogged = false;
          }
        })

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

    }
    cerrarSesion(){
        this.auth.logOut().then(()=>{
            alert("Sesion cerrada con exito")
        }).catch(()=>{
            alert("problemas al cerrar sesion")
        })
    }

    
    }
 
   

