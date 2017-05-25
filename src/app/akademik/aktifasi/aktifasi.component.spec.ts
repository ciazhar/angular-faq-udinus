import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AktifasiComponent } from './aktifasi.component';

describe('AktifasiComponent', () => {
  let component: AktifasiComponent;
  let fixture: ComponentFixture<AktifasiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AktifasiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AktifasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
