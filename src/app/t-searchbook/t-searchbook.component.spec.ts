import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TSearchbookComponent } from './t-searchbook.component';

describe('TSearchbookComponent', () => {
  let component: TSearchbookComponent;
  let fixture: ComponentFixture<TSearchbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TSearchbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TSearchbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
