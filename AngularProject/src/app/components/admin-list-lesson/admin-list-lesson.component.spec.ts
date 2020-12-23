import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListLessonComponent } from './admin-list-lesson.component';

describe('AdminListLessonComponent', () => {
  let component: AdminListLessonComponent;
  let fixture: ComponentFixture<AdminListLessonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminListLessonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
