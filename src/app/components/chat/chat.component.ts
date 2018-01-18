import { Component, OnInit} from '@angular/core';
import { ChatService } from '../../providers/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent  implements OnInit {
  
  mensaje: string = '';
  elemento: any;
  
  constructor(private _chatService: ChatService) { 
    this._chatService.cargarMensajes()
    .subscribe( () => {
      setTimeout(() => {
        this.elemento.scrollTop = this.elemento.scrollHeight;
      }, 20);
    } );
  }
  
  ngOnInit() {
    this.elemento = document.getElementById('app-mensajes');
  }

  enviar_mensaje() {
    console.log(this.mensaje);

    if (this.mensaje.length === 0) {
      return;
    }
    this._chatService.agregarMensaje(this.mensaje)
          .then(() => this.mensaje = '' )
          .catch((err) => console.error('no se pudo enviar el mensaje', err));
  }

}
