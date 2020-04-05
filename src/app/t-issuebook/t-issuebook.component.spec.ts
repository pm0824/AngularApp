import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TIssuebookComponent } from './t-issuebook.component';

describe('TIssuebookComponent', () => {
  let component: TIssuebookComponent;
  let fixture: ComponentFixture<TIssuebookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TIssuebookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TIssuebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
