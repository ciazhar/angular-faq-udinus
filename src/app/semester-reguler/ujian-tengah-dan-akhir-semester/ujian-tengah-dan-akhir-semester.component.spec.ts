import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UjianTengahDanAkhirSemesterComponent } from './ujian-tengah-dan-akhir-semester.component';

describe('UjianTengahDanAkhirSemesterComponent', () => {
  let component: UjianTengahDanAkhirSemesterComponent;
  let fixture: ComponentFixture<UjianTengahDanAkhirSemesterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UjianTengahDanAkhirSemesterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UjianTengahDanAkhirSemesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
