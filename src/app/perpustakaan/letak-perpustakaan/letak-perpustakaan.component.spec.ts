import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetakPerpustakaanComponent } from './letak-perpustakaan.component';

describe('LetakPerpustakaanComponent', () => {
  let component: LetakPerpustakaanComponent;
  let fixture: ComponentFixture<LetakPerpustakaanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetakPerpustakaanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetakPerpustakaanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
