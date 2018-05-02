import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/chat.component';
import { HttpClientModule } from '@angular/common/http';
import { PusherService } from './pusher.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, AdminComponent, HomeComponent, ChatComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [PusherService],
  bootstrap: [AppComponent],
})
export class AppModule {}
