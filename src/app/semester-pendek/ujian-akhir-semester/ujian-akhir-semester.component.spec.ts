import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UjianAkhirSemesterComponent } from './ujian-akhir-semester.component';

describe('UjianAkhirSemesterComponent', () => {
  let component: UjianAkhirSemesterComponent;
  let fixture: ComponentFixture<UjianAkhirSemesterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UjianAkhirSemesterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UjianAkhirSemesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
