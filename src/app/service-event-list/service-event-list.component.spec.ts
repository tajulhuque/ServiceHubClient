import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceEventListComponent } from './service-event-list.component';

describe('ServiceEventListComponent', () => {
  let component: ServiceEventListComponent;
  let fixture: ComponentFixture<ServiceEventListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceEventListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceEventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
