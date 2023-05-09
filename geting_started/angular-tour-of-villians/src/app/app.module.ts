import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- Ng Model to love here

import { AppComponent } from './app.component';
import { VillainsComponent } from './villains/villains.component';
import { VillainDetailComponent } from './villain-detail/villain-detail.component';
import { MessagesComponent } from './messages/messages.component';
// import { VilliansComponent } from './villians/villians.component';

@NgModule({
  declarations: [
    AppComponent,
    VillainsComponent,
    VillainDetailComponent,
    MessagesComponent,
    // VilliansComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
