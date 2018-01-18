import { Component} from '@angular/core';
import { ChatService } from '../../providers/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent {

  mensaje: string = '';

  constructor(private _chatService: ChatService) { 
    this._chatService.cargarMensajes()
          .subscribe((mensajes: any[]) => {
            console.log(mensajes);
          });
  }

  enviar_mensaje() {
    console.log(this.mensaje);
  }

}
