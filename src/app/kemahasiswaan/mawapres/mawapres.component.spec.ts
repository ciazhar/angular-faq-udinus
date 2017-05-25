import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MawapresComponent } from './mawapres.component';

describe('MawapresComponent', () => {
  let component: MawapresComponent;
  let fixture: ComponentFixture<MawapresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MawapresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MawapresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
