import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProsesKrsComponent } from './proses-krs.component';

describe('ProsesKrsComponent', () => {
  let component: ProsesKrsComponent;
  let fixture: ComponentFixture<ProsesKrsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProsesKrsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProsesKrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
