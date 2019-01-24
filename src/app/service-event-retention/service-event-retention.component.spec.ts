import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceEventRetentionComponent } from './service-event-retention.component';

describe('ServiceEventRetentionComponent', () => {
  let component: ServiceEventRetentionComponent;
  let fixture: ComponentFixture<ServiceEventRetentionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceEventRetentionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceEventRetentionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
