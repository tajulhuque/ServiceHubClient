import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceEvent } from '../serviceEvent';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceEventsService {

  // private serviceEventsUrl = 'http://localhost:52836/api/ServiceActions';
  private serviceEventsUrl = 'http://localhost:3000/ServiceActions';

  constructor(private http: HttpClient) { }

  getServiceEvents(): Observable<ServiceEvent[]> {

    return this.http.get<ServiceEvent[]>(this.serviceEventsUrl);
  }

}
