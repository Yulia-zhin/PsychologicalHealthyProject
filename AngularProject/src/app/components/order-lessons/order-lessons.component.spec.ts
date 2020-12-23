import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderLessonsComponent } from './order-lessons.component';

describe('OrderLessonsComponent', () => {
  let component: OrderLessonsComponent;
  let fixture: ComponentFixture<OrderLessonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderLessonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
