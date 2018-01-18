import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Mensaje } from '../interfaces/mensaje';

@Injectable()
export class ChatService {
  private itemsCollection: AngularFirestoreCollection<Mensaje>;
  public chats: Mensaje[] = [];

  constructor( private afs: AngularFirestore ) { }

  cargarMensajes() {
    this.itemsCollection = this.afs.collection<Mensaje>('chats');

    return this.itemsCollection.valueChanges()
                              .map((mensajes: Mensaje[]) => {
                                console.log(mensajes);

                                this.chats = mensajes;
                              });
  }

  agregarMensaje( texto: string) {
    
    // TODO falta el UID del usuario
    let mensaje: Mensaje = {
      nombre: 'ErnestoDemo',
      mensaje: texto,
      fecha: new Date().getTime()
    };

    return this.itemsCollection.add( mensaje );
  }

}
