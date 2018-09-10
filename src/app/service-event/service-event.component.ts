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

  @Input()
  public isSelected: boolean;

  @Output()
  public doServiceEventSelect = new EventEmitter<ServiceEvent>();

  constructor() { }

  ngOnInit() {
    //this.isSelected = true;
  }

  selectServiceEvent() {
    this.doServiceEventSelect.emit(this.serviceEvent);
  }

}
