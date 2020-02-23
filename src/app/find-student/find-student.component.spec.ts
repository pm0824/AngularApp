import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindStudentComponent } from './find-student.component';

describe('FindStudentComponent', () => {
  let component: FindStudentComponent;
  let fixture: ComponentFixture<FindStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
