import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JenisDanKategoriComponent } from './jenis-dan-kategori.component';

describe('JenisDanKategoriComponent', () => {
  let component: JenisDanKategoriComponent;
  let fixture: ComponentFixture<JenisDanKategoriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JenisDanKategoriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JenisDanKategoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
