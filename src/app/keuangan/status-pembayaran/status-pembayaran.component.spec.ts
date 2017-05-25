import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusPembayaranComponent } from './status-pembayaran.component';

describe('StatusPembayaranComponent', () => {
  let component: StatusPembayaranComponent;
  let fixture: ComponentFixture<StatusPembayaranComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusPembayaranComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusPembayaranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
