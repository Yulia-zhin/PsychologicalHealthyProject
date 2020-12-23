import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpTasksComponent } from './help-tasks.component';

describe('HelpTasksComponent', () => {
  let component: HelpTasksComponent;
  let fixture: ComponentFixture<HelpTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
