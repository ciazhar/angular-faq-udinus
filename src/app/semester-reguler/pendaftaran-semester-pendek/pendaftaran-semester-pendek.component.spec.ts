import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendaftaranSemesterPendekComponent } from './pendaftaran-semester-pendek.component';

describe('PendaftaranSemesterPendekComponent', () => {
  let component: PendaftaranSemesterPendekComponent;
  let fixture: ComponentFixture<PendaftaranSemesterPendekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendaftaranSemesterPendekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendaftaranSemesterPendekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
