import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LokasiPercetakanComponent } from './lokasi-percetakan.component';

describe('LokasiPercetakanComponent', () => {
  let component: LokasiPercetakanComponent;
  let fixture: ComponentFixture<LokasiPercetakanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LokasiPercetakanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LokasiPercetakanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
