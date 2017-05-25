import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformasiKelasKosongComponent } from './informasi-kelas-kosong.component';

describe('InformasiKelasKosongComponent', () => {
  let component: InformasiKelasKosongComponent;
  let fixture: ComponentFixture<InformasiKelasKosongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformasiKelasKosongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformasiKelasKosongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
