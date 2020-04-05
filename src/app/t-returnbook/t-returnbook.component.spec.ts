import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TReturnbookComponent } from './t-returnbook.component';

describe('TReturnbookComponent', () => {
  let component: TReturnbookComponent;
  let fixture: ComponentFixture<TReturnbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TReturnbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TReturnbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
