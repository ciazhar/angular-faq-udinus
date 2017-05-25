import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeluarMasukComponent } from './keluar-masuk.component';

describe('KeluarMasukComponent', () => {
  let component: KeluarMasukComponent;
  let fixture: ComponentFixture<KeluarMasukComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeluarMasukComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeluarMasukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
