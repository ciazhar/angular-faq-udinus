import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoLowonganComponent } from './info-lowongan.component';

describe('InfoLowonganComponent', () => {
  let component: InfoLowonganComponent;
  let fixture: ComponentFixture<InfoLowonganComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoLowonganComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoLowonganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
