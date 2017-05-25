import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkripsiAtauTugasAkhirComponent } from './skripsi-atau-tugas-akhir.component';

describe('SkripsiAtauTugasAkhirComponent', () => {
  let component: SkripsiAtauTugasAkhirComponent;
  let fixture: ComponentFixture<SkripsiAtauTugasAkhirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkripsiAtauTugasAkhirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkripsiAtauTugasAkhirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
