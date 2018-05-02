import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
declare const Pusher: any;

@Injectable()
export class PusherService {
  constructor() {
    this.pusher = new Pusher(environment.pusherKey, {
      cluster: 'eu',
      encrypted: true,
    });
  }
  pusher;

  public init(channel) {
    return this.pusher.subscribe(channel);
  }
}
