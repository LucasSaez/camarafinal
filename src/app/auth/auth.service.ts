import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  public user! : Observable<any>

  constructor(private auth: AngularFireAuth) { 
    this.user = this.auth.authState
   }
  /**
    
  Metodo para iniciar sesion 
  parametros necesarios: 
  username: mail -> string
  password -> string

   **/
login (username:string, password: string){
  
  return this.auth.signInWithEmailAndPassword(username, password);
  
}


/*
Metodo para cerrar sesion en firebase 
*/
logOut(){
 return  this.auth.signOut();
}

currentUser(){
  this.auth.authState
}

isAuth(){
  return this.auth.authState.pipe(map (auth => auth))
}
}
