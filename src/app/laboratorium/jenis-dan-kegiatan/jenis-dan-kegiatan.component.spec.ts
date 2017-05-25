import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JenisDanKegiatanComponent } from './jenis-dan-kegiatan.component';

describe('JenisDanKegiatanComponent', () => {
  let component: JenisDanKegiatanComponent;
  let fixture: ComponentFixture<JenisDanKegiatanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JenisDanKegiatanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JenisDanKegiatanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
