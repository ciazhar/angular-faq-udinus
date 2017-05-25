import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermohonanCutiComponent } from './permohonan-cuti.component';

describe('PermohonanCutiComponent', () => {
  let component: PermohonanCutiComponent;
  let fixture: ComponentFixture<PermohonanCutiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermohonanCutiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermohonanCutiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
