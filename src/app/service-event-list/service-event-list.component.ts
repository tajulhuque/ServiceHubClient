import { Component, OnInit } from '@angular/core';
import {ServiceEvent} from '../serviceEvent';
import { ServiceEventsService } from '../services/service-events.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-service-event-list',
  templateUrl: './service-event-list.component.html',
  styleUrls: ['./service-event-list.component.css']
})
export class ServiceEventListComponent implements OnInit {

  title: string;
  events: ServiceEvent[];
  selectedServiceEvent: ServiceEvent = null;

  constructor(private eventService: ServiceEventsService,
              private router: Router) {    
  }

  ngOnInit() {

    console.log("dfsdf");

    this.eventService.getServiceEvents()
      .subscribe(data => {
        console.log(data);
        this.events = this.filterEventsForRoute(data, this.router.url);
      });
  }

  selectServiceEvent(servEvent:ServiceEvent) {
    this.selectedServiceEvent = servEvent;
  }

  filterEventsForRoute(events: ServiceEvent[], routeUrl: string) : ServiceEvent[] {
    
    console.log("url is" + routeUrl);

   switch(routeUrl) {
     
     case '/integration': {
       this.title = "(Integration Handler)"
      return events.filter(se => se.appName == 'Integration Handler'); 
     }
     case '/email-parser': {
      this.title = "(Email Parser)"
      return events.filter(se => se.appName == 'Email Parser');
     }
     case '/all': {
       this.title = ''
       return events;
     }
     case '/': {
       this.title = ''
       return events;
     }
   }
  }

}
