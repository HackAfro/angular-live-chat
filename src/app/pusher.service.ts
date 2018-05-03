import { Injectable } from '@angular/core';
declare const Pusher: any;

@Injectable()
export class PusherService {
  constructor() {
  // Replace this with your pusher key    
    this.pusher = new Pusher('<PUSHER_KEY>', {
      cluster: 'eu',
      encrypted: true,
    });
  }
  pusher;

  public init(channel) {
    return this.pusher.subscribe(channel);
  }
}
