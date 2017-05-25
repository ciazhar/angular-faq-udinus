import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempatParkirComponent } from './tempat-parkir.component';

describe('TempatParkirComponent', () => {
  let component: TempatParkirComponent;
  let fixture: ComponentFixture<TempatParkirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempatParkirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempatParkirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
