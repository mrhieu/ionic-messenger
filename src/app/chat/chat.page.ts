import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  messages: any[];
  messageInput: string;
  isFocus: boolean;

  constructor() { }

  ngOnInit() {
    this.messages = [
      {
        isSender: false,
        avatar: 'assets/img/avatars/5.jpg',
        type: 'text',// text || image
        body: 'Hey yo what\'s up?',
        timestamp: 'May 2, 2020 9:48 AM'
      },
      {
        isSender: true,
        type: 'image',// text || image
        body: 'https://media.giphy.com/media/1g0Nz8xkYaqiBBYyLe/giphy.gif',
        timestamp: 'May 2, 2020 9:50 AM'
      },
      {
        isSender: false,
        avatar: 'assets/img/avatars/5.jpg',
        type: 'image',// text || image
        body: 'https://media.giphy.com/media/4BWByhavc3Hr2/giphy.gif',
        timestamp: 'May 2, 2020 9:52 AM'
      },
      {
        isSender: true,
        type: 'text',// text || image
        body: 'Where are you, buddy?',
        timestamp: 'May 2, 2020 9:53 AM'
      },
      {
        isSender: false,
        avatar: 'assets/img/avatars/5.jpg',
        type: 'text',// text || image
        body: 'I\'m almost there',
        timestamp: 'May 2, 2020 9:53 AM'
      }
    ];
  }

  toggleFocus(isFocus: boolean) {
    this.isFocus = isFocus;
  }

  nl2br(text: string) {
    if (!text) return text;

    return text.replace(/\n/ig, '<br>');
  }

}
