import { Component, OnInit, Input } from '@angular/core';
import { ServiceEvent } from '../service data/serviceEvent';

@Component({
  selector: 'app-service-event-details',
  templateUrl: './service-event-details.component.html',
  styleUrls: ['./service-event-details.component.css']
})
export class ServiceEventDetailsComponent implements OnInit {

  @Input()
  public serviceEvent: ServiceEvent

  constructor() { }

  ngOnInit() {
   
  }

}
