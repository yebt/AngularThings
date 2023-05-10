import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- Ng Model to love here
import { HttpClientModule } from '@angular/common/http' // add httpclient
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';


import { AppComponent } from './app.component';
import { VillainsComponent } from './villains/villains.component';
import { VillainDetailComponent } from './villain-detail/villain-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VillainSearchComponent } from './villain-search/villain-search.component';
// import { VilliansComponent } from './villians/villians.component';

@NgModule({
  declarations: [
    AppComponent,
    VillainsComponent,
    VillainDetailComponent,
    MessagesComponent,
    DashboardComponent,
    VillainSearchComponent,
    // VilliansComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule, // httpclient
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
