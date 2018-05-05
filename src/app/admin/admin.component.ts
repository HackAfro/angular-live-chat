import { Component, OnInit } from '@angular/core';
import { PusherService } from '../pusher.service';

declare const feather: any;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  constructor(private pusher: PusherService) {}

  rating = 1;

  ngOnInit() {
    feather.replace();
    const channel = this.pusher.init('rate');
    channel.bind('message', (data) => {
      this.rating += data.score;
    });
  }
}
