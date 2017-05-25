import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WisudaComponent } from './wisuda.component';

describe('WisudaComponent', () => {
  let component: WisudaComponent;
  let fixture: ComponentFixture<WisudaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WisudaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WisudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
