import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceEvent } from '../serviceEvent';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceEventsService {

  private serviceEventsUrl = 'http://localhost:52836/api/ServiceActions';

  constructor(private http: HttpClient) { }

  getServiceEvents(): Observable<ServiceEvent[]> {

    return this.http.get<any>(this.serviceEventsUrl).pipe(
             map((data) => {
                return data.map(e => {
                  return new ServiceEvent(e.Description, e.LogEntry, 1, 1);
                });
             }));
  }

}
