import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranskripComponent } from './transkrip.component';

describe('TranskripComponent', () => {
  let component: TranskripComponent;
  let fixture: ComponentFixture<TranskripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranskripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranskripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
