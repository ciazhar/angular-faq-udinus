import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TanggalPelaksanaanComponent } from './tanggal-pelaksanaan.component';

describe('TanggalPelaksanaanComponent', () => {
  let component: TanggalPelaksanaanComponent;
  let fixture: ComponentFixture<TanggalPelaksanaanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TanggalPelaksanaanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TanggalPelaksanaanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
