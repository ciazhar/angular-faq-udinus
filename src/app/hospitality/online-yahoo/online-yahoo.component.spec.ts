import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineYahooComponent } from './online-yahoo.component';

describe('OnlineYahooComponent', () => {
  let component: OnlineYahooComponent;
  let fixture: ComponentFixture<OnlineYahooComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineYahooComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineYahooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
