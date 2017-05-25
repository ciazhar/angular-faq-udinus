import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RencanaIndukPenelitianComponent } from './rencana-induk-penelitian.component';

describe('RencanaIndukPenelitianComponent', () => {
  let component: RencanaIndukPenelitianComponent;
  let fixture: ComponentFixture<RencanaIndukPenelitianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RencanaIndukPenelitianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RencanaIndukPenelitianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
