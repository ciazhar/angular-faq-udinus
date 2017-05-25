import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BebanKinerjaDosenComponent } from './beban-kinerja-dosen.component';

describe('BebanKinerjaDosenComponent', () => {
  let component: BebanKinerjaDosenComponent;
  let fixture: ComponentFixture<BebanKinerjaDosenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BebanKinerjaDosenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BebanKinerjaDosenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
