import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitKegiatanMahasiswaComponent } from './unit-kegiatan-mahasiswa.component';

describe('UnitKegiatanMahasiswaComponent', () => {
  let component: UnitKegiatanMahasiswaComponent;
  let fixture: ComponentFixture<UnitKegiatanMahasiswaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitKegiatanMahasiswaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitKegiatanMahasiswaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
