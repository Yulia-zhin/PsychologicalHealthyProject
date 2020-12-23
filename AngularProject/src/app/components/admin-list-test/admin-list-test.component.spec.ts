import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListTestComponent } from './admin-list-test.component';

describe('AdminListTestComponent', () => {
  let component: AdminListTestComponent;
  let fixture: ComponentFixture<AdminListTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminListTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
