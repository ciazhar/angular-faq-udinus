import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayananPoliklinikComponent } from './layanan-poliklinik.component';

describe('LayananPoliklinikComponent', () => {
  let component: LayananPoliklinikComponent;
  let fixture: ComponentFixture<LayananPoliklinikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayananPoliklinikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayananPoliklinikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
