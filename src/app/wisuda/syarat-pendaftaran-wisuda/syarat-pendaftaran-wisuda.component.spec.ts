import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyaratPendaftaranWisudaComponent } from './syarat-pendaftaran-wisuda.component';

describe('SyaratPendaftaranWisudaComponent', () => {
  let component: SyaratPendaftaranWisudaComponent;
  let fixture: ComponentFixture<SyaratPendaftaranWisudaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyaratPendaftaranWisudaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyaratPendaftaranWisudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
