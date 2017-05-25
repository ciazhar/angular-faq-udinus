import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsCenterComponent } from './sms-center.component';

describe('SmsCenterComponent', () => {
  let component: SmsCenterComponent;
  let fixture: ComponentFixture<SmsCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
