import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceEventComponent } from './service-event.component';

describe('ServiceEventComponent', () => {
  let component: ServiceEventComponent;
  let fixture: ComponentFixture<ServiceEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
