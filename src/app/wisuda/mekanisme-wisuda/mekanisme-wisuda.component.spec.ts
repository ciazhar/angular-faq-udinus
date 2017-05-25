import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MekanismeWisudaComponent } from './mekanisme-wisuda.component';

describe('MekanismeWisudaComponent', () => {
  let component: MekanismeWisudaComponent;
  let fixture: ComponentFixture<MekanismeWisudaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MekanismeWisudaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MekanismeWisudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
