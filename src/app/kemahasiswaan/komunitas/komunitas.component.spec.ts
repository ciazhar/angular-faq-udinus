import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KomunitasComponent } from './komunitas.component';

describe('KomunitasComponent', () => {
  let component: KomunitasComponent;
  let fixture: ComponentFixture<KomunitasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KomunitasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KomunitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
