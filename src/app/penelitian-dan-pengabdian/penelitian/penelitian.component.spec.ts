import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenelitianComponent } from './penelitian.component';

describe('PenelitianComponent', () => {
  let component: PenelitianComponent;
  let fixture: ComponentFixture<PenelitianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenelitianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenelitianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
