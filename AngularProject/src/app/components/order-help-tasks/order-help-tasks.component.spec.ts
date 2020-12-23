import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderHelpTasksComponent } from './order-help-tasks.component';

describe('OrderHelpTasksComponent', () => {
  let component: OrderHelpTasksComponent;
  let fixture: ComponentFixture<OrderHelpTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderHelpTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderHelpTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
