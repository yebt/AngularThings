import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- Ng Model to love here

import { AppComponent } from './app.component';
import { VilliansComponent } from './villians/villians.component';

@NgModule({
  declarations: [
    AppComponent,
    VilliansComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
