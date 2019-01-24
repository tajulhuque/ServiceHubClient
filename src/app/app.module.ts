import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ServiceEventListComponent } from './service-event-list/service-event-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceEventComponent } from './service-event/service-event.component';
import { ServiceEventDetailsComponent } from './service-event-details/service-event-details.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TestFormComponent } from './test-form/test-form.component';
import {FormsModule} from '@angular/forms';
import { ServiceEventRetentionComponent } from './service-event-retention/service-event-retention.component'

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
    path: 'test-form', 
    component: TestFormComponent
  },
  { 
    path: '**', 
    component: ServiceEventListComponent,
    data: {AppName: 'all'}
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ServiceEventListComponent,
    ServiceEventComponent,
    ServiceEventDetailsComponent,
    NavigationComponent,
    TestFormComponent,
    ServiceEventRetentionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
