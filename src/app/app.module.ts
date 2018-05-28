import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceEventListComponent } from './service-event-list/service-event-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceEventComponent } from './service-event/service-event.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiceEventListComponent,
    ServiceEventComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
