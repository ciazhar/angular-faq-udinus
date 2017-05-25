import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IjazahComponent } from './ijazah.component';

describe('IjazahComponent', () => {
  let component: IjazahComponent;
  let fixture: ComponentFixture<IjazahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IjazahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IjazahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
