import { Component, OnInit, Input } from '@angular/core';
import { RetentionPolicy } from '../service data/retentionPolicy';
import { ServiceEventsService } from '../services/service-events.service';
import { ServiceEvent } from '../service data/serviceEvent';

@Component({
  selector: 'app-service-event-retention',
  templateUrl: './service-event-retention.component.html',
  styleUrls: ['./service-event-retention.component.css']
})
export class ServiceEventRetentionComponent implements OnInit {

  @Input()
  public serviceEvent: ServiceEvent

  constructor(private eventService: ServiceEventsService) { }

  ngOnInit() {
  }

  UpdateServieEvent() {
    console.log(this.serviceEvent);
    this.eventService.updateServiceEvent(this.serviceEvent).subscribe(
      {
        next: () => {},
        error: err => console.log("error occurred: "  + err),
        complete: () =>{},
      }
    );
  }

    
}
