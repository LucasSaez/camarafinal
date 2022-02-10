import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore'
import { Iproducto } from './serviciosinterface';
import {finalize, map} from 'rxjs/operators'
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  private productoCollection!:AngularFirestoreCollection<Iproducto>;
  
  private urlImagen:string = '';

  constructor(private firestore: AngularFirestore, private storage: AngularFireStorage) { 
    this.productoCollection = this.firestore.collection<Iproducto>('productos');
  }
  //Agregamos un producto a nuestra base de datos, en este caso firestore
  agregarProducto(producto: Iproducto){
    return new Promise(async (resolve, reject)=>{
      try {

        //generamos un id automatico y se lo asignamos al producto
        const id = this.firestore.createId();
        producto.id = id;
  
        const result = await this.productoCollection.doc(id).set(producto);
        resolve(result);
        
      } catch (error) {
        reject(error)
      }
    })
   }

   obtenerProductos(){
    return this.productoCollection!.snapshotChanges().pipe(
      map(action=>action.map(a =>a.payload.doc.data() as Iproducto))
    )
   }

   editarProducto(id:string, infoProduc: Iproducto){
    return new Promise(async (resolve, rejects)=>{
      try {
        const result = await this.firestore.collection('productos').doc(id).update(infoProduc);
        resolve(result);
      } catch (error) {
        rejects(error);
      }
    }) 
    
   }

   eliminarProducto(id:string){
    return new Promise(async (resolve, reject)=>{
      try {
        const result = await this.productoCollection.doc(id).delete();
        resolve(result);
      } catch (error) {
        reject(error);
      }
    })

   }

   
   subirImagen(file:File, producto:Iproducto,idProducto?:string){
    //la ruta a la imagen
   const imagenPath = `imagenes/productos/${file.name}`;
   //nos creamos la referencia a la imagen!
   const imageRef = this.storage.ref(imagenPath);
   //subimos la imagen a storage
   const tarea = this.storage.upload(imagenPath, file);

   //Obtener la referencia de la imagen es decir la url 
  tarea.snapshotChanges().pipe(
     finalize(()=>{
       imageRef.getDownloadURL().subscribe((url=>{
         this.urlImagen = url;

         //agrego la url de la imagen a mi producto
         producto.url = this.urlImagen;
         //de esta forma se si quiero editar o agregar uno nuevo, ya que si viene un id quiero editarlo!
         if(idProducto){
           this.editarProducto(idProducto, producto);
         }
         else{
           this.agregarProducto(producto);
         }
       }))
   })).subscribe();
  }

}

   