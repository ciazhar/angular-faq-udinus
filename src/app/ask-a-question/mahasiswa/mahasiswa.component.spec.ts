import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MahasiswaComponent } from './mahasiswa.component';

describe('MahasiswaComponent', () => {
  let component: MahasiswaComponent;
  let fixture: ComponentFixture<MahasiswaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MahasiswaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MahasiswaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
