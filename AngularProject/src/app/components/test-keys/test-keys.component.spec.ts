import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestKeysComponent } from './test-keys.component';

describe('TestKeysComponent', () => {
  let component: TestKeysComponent;
  let fixture: ComponentFixture<TestKeysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestKeysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestKeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
