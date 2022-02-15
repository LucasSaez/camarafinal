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
  
  logueado: boolean = true;


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

        this.auth.user.subscribe((user)=>{
            if(user){
                this.logueado =true;
                
                }
            
            else{
                this.logueado = true;
                console.log(this.logueado);
                }
            
        });


    
    }
 
   
}
