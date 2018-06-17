import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceEventDetailsComponent } from './service-event-details.component';

describe('ServiceEventDetailsComponent', () => {
  let component: ServiceEventDetailsComponent;
  let fixture: ComponentFixture<ServiceEventDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceEventDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceEventDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
