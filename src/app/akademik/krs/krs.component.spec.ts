import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KrsComponent } from './krs.component';

describe('KrsComponent', () => {
  let component: KrsComponent;
  let fixture: ComponentFixture<KrsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KrsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
