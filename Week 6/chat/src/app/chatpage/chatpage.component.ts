import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-chatpage',
  templateUrl: './chatpage.component.html',
  styleUrls: ['./chatpage.component.css']
})
export class ChatpageComponent implements OnInit {
  messageText: string;
  messages: Array<any>;
  username: string;
  socket: SocketIOClient.Socket;
  constructor() {
  this.socket = io.connect('localhost:8080');
  this.username = localStorage.getItem("username");
 }

 ngOnInit() {
       this.messages = new Array();
       this.socket.on('message', (msg: any) => {
           this.messages.push(msg);
           console.log(msg);
           console.log(this.messages);
       });
  }

  sendMessage() {
   const message = {
     text: this.messageText,
     from: this.username
   };
   this.socket.emit('send-message', message);
   this.messageText = '';
 }

}
