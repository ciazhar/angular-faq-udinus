import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProsedurPengembalianComponent } from './prosedur-pengembalian.component';

describe('ProsedurPengembalianComponent', () => {
  let component: ProsedurPengembalianComponent;
  let fixture: ComponentFixture<ProsedurPengembalianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProsedurPengembalianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProsedurPengembalianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
