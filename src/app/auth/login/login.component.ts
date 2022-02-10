import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formularioLogin: FormGroup;
  
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) { 

    //inicializo mi formulario 

    this.formularioLogin = fb.group ({
       username:['', [Validators.required,Validators.email]],
       password: ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }

  IniciarSesion(){
    //preguntamos si formulario es valido
    if(!this.formularioLogin.invalid){

      //obtengo esos datos del formulario

      const{username, password} = this.formularioLogin.value;

      //inicio sesion en firebase

      this.auth.login(username, password).then ((resp)=>{
        alert("Iniciaste sesión de forma correcta");
        this.router.navigateByUrl('inicio')
      }).catch(error=>{
        alert("datos incorrectos, verifique el mail o la contraseña");
      }) ;
    }
    else{
      alert('revise los datos, son incorrectos');
    }
  }
}
 