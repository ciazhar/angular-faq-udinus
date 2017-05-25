import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KtmComponent } from './ktm.component';

describe('KtmComponent', () => {
  let component: KtmComponent;
  let fixture: ComponentFixture<KtmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KtmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KtmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
