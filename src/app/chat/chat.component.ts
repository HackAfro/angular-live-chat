import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare const feather: any;
export interface Message {
  text: string;
  name: string;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  constructor(private http: HttpClient) {}

  @Output() onSendMessage: EventEmitter<Message> = new EventEmitter();

  message = {
    name: '',
    text: '',
  };

  sendMessage() {
    if (this.message.text !== '' && this.message.name !== '') {
      this.http
        .post(`http://localhost:4000/messages`, this.message)
        .subscribe((res: Message) => {
          this.onSendMessage.emit(res);
          this.message = {
            name: '',
            text: '',
          };
        });
    }
  }

  ngOnInit() {
    feather.replace(); 
  }
}
