import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KehilanganComponent } from './kehilangan.component';

describe('KehilanganComponent', () => {
  let component: KehilanganComponent;
  let fixture: ComponentFixture<KehilanganComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KehilanganComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KehilanganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
