import { Component, OnInit, Input } from '@angular/core';
import { RetentionPolicy } from '../service data/retentionPolicy';

@Component({
  selector: 'app-service-event-retention',
  templateUrl: './service-event-retention.component.html',
  styleUrls: ['./service-event-retention.component.css']
})
export class ServiceEventRetentionComponent implements OnInit {

  @Input()
  public retentionPolicy: RetentionPolicy;

  constructor() { }

  ngOnInit() {
  }

}
