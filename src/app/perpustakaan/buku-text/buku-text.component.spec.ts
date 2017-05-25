import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BukuTextComponent } from './buku-text.component';

describe('BukuTextComponent', () => {
  let component: BukuTextComponent;
  let fixture: ComponentFixture<BukuTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BukuTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BukuTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
