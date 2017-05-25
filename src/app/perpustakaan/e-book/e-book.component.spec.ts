import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EBookComponent } from './e-book.component';

describe('EBookComponent', () => {
  let component: EBookComponent;
  let fixture: ComponentFixture<EBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
