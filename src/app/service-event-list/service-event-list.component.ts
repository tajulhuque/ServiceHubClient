import { Component, OnInit } from '@angular/core';
import {ServiceEvent} from '../serviceEvent';
import { ServiceEventsService } from '../services/service-events.service';


@Component({
  selector: 'app-service-event-list',
  templateUrl: './service-event-list.component.html',
  styleUrls: ['./service-event-list.component.css']
})
export class ServiceEventListComponent implements OnInit {

  title: string;
  events: ServiceEvent[];
  selectedServiceEvent: ServiceEvent = null;

  constructor(private eventService: ServiceEventsService) {    
  }

  ngOnInit() {

    this.title = "All Events"

    this.eventService.getServiceEvents()
      .subscribe(data => this.events = data);
  }

  selectServiceEvent(servEvent:ServiceEvent) {
    this.selectedServiceEvent = servEvent;
  }

}
