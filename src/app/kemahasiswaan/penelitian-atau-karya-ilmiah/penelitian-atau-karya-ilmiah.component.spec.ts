import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenelitianAtauKaryaIlmiahComponent } from './penelitian-atau-karya-ilmiah.component';

describe('PenelitianAtauKaryaIlmiahComponent', () => {
  let component: PenelitianAtauKaryaIlmiahComponent;
  let fixture: ComponentFixture<PenelitianAtauKaryaIlmiahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenelitianAtauKaryaIlmiahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenelitianAtauKaryaIlmiahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
