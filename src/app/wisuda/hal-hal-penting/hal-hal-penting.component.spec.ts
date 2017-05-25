import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HalHalPentingComponent } from './hal-hal-penting.component';

describe('HalHalPentingComponent', () => {
  let component: HalHalPentingComponent;
  let fixture: ComponentFixture<HalHalPentingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HalHalPentingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HalHalPentingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
