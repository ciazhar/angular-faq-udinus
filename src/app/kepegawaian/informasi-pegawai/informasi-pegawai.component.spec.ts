import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformasiPegawaiComponent } from './informasi-pegawai.component';

describe('InformasiPegawaiComponent', () => {
  let component: InformasiPegawaiComponent;
  let fixture: ComponentFixture<InformasiPegawaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformasiPegawaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformasiPegawaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
