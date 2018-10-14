import { Component, OnInit } from '@angular/core';
import { ServiceEventsService } from '../services/service-events.service';
import { ServiceEvent } from '../serviceEvent';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent implements OnInit {

  public serviceEvent: ServiceEvent 

  constructor(private eventService: ServiceEventsService,
              private router: Router) { }

  ngOnInit() {
    this.serviceEvent = new ServiceEvent('', '', 1, 3, '', new Date());
  }

  createServieEvent() {
    console.log(this.serviceEvent);
    this.eventService.addServiceEvent(this.serviceEvent).subscribe(
      {
        next: () => {},
        error: err => console.log("error occurred: "  + err),
        complete: () =>this.router.navigateByUrl('/all'),
      }
    );
    
  }

}
