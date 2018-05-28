import { Component, OnInit } from '@angular/core';
import {ServiceEvent} from '../serviceEvent';
import { ServiceEventsService } from '../services/service-events.service';


@Component({
  selector: 'app-service-event-list',
  templateUrl: './service-event-list.component.html',
  styleUrls: ['./service-event-list.component.css']
})
export class ServiceEventListComponent implements OnInit {

  events: ServiceEvent[];

  constructor(private eventService: ServiceEventsService) {
  }

  ngOnInit() {
    this.eventService.getServiceEvents()
      .subscribe(data => this.events = data);
  }

}
