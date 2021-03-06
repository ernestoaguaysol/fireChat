import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../providers/chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  constructor( private _chatService: ChatService) { }

  ngOnInit() {
  }

  ingresar( proveedor: string) {
    console.log(proveedor);
    this._chatService.login( proveedor );
  }

}
