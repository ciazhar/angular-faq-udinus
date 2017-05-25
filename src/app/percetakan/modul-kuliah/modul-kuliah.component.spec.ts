import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulKuliahComponent } from './modul-kuliah.component';

describe('ModulKuliahComponent', () => {
  let component: ModulKuliahComponent;
  let fixture: ComponentFixture<ModulKuliahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulKuliahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulKuliahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
