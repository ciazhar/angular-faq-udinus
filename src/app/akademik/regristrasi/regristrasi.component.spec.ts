import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegristrasiComponent } from './regristrasi.component';

describe('RegristrasiComponent', () => {
  let component: RegristrasiComponent;
  let fixture: ComponentFixture<RegristrasiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegristrasiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegristrasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
