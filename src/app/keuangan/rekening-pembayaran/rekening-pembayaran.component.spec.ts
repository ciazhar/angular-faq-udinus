import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RekeningPembayaranComponent } from './rekening-pembayaran.component';

describe('RekeningPembayaranComponent', () => {
  let component: RekeningPembayaranComponent;
  let fixture: ComponentFixture<RekeningPembayaranComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RekeningPembayaranComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RekeningPembayaranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
