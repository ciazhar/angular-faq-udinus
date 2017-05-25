import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendaftaranSpComponent } from './pendaftaran-sp.component';

describe('PendaftaranSpComponent', () => {
  let component: PendaftaranSpComponent;
  let fixture: ComponentFixture<PendaftaranSpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendaftaranSpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendaftaranSpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
