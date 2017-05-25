import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerdosComponent } from './serdos.component';

describe('SerdosComponent', () => {
  let component: SerdosComponent;
  let fixture: ComponentFixture<SerdosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerdosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerdosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
