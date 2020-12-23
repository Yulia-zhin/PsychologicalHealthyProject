import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListTaskComponent } from './admin-list-task.component';

describe('AdminListTaskComponent', () => {
  let component: AdminListTaskComponent;
  let fixture: ComponentFixture<AdminListTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminListTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
