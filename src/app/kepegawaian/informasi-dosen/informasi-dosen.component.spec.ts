import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformasiDosenComponent } from './informasi-dosen.component';

describe('InformasiDosenComponent', () => {
  let component: InformasiDosenComponent;
  let fixture: ComponentFixture<InformasiDosenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformasiDosenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformasiDosenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
