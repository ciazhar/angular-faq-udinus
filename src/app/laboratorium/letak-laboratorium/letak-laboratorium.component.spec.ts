import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetakLaboratoriumComponent } from './letak-laboratorium.component';

describe('LetakLaboratoriumComponent', () => {
  let component: LetakLaboratoriumComponent;
  let fixture: ComponentFixture<LetakLaboratoriumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetakLaboratoriumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetakLaboratoriumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
