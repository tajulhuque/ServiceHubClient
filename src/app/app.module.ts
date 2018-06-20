import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ServiceEventListComponent } from './service-event-list/service-event-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceEventComponent } from './service-event/service-event.component';
import { ServiceEventDetailsComponent } from './service-event-details/service-event-details.component';
import { NavigationComponent } from './navigation/navigation.component';

const appRoutes: Routes = [
  { 
    path: 'email-parser', 
    component: ServiceEventListComponent,
    data: {AppName: 'Email Parser'} 
  },
  { 
    path: 'integration', 
    component: ServiceEventListComponent,
    data: {AppName: 'Integration Handler'} 
  },
  { 
    path: '**', 
    component: ServiceEventListComponent,
    data: {AppName: ''}
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ServiceEventListComponent,
    ServiceEventComponent,
    ServiceEventDetailsComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
