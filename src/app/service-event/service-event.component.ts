import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ServiceEvent } from '../serviceEvent';


@Component({
  selector: 'app-service-event',
  templateUrl: './service-event.component.html',
  styleUrls: ['./service-event.component.css']
})
export class ServiceEventComponent implements OnInit {

  @Input()
  public serviceEvent: ServiceEvent;

  @Output()
  public doServiceEventSelect = new EventEmitter<ServiceEvent>();

  constructor() { }

  ngOnInit() {
  }

  selectServiceEvent() {
    this.doServiceEventSelect.emit(this.serviceEvent);
  }

}
