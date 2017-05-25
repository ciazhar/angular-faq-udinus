import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProsedurPinjamComponent } from './prosedur-pinjam.component';

describe('ProsedurPinjamComponent', () => {
  let component: ProsedurPinjamComponent;
  let fixture: ComponentFixture<ProsedurPinjamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProsedurPinjamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProsedurPinjamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
