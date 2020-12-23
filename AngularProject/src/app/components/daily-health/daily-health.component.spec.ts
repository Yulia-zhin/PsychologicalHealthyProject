import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyHealthComponent } from './daily-health.component';

describe('DailyHealthComponent', () => {
  let component: DailyHealthComponent;
  let fixture: ComponentFixture<DailyHealthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyHealthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
