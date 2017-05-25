import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeregristrasiComponent } from './heregristrasi.component';

describe('HeregristrasiComponent', () => {
  let component: HeregristrasiComponent;
  let fixture: ComponentFixture<HeregristrasiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeregristrasiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeregristrasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
