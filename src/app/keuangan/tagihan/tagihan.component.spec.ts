import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagihanComponent } from './tagihan.component';

describe('TagihanComponent', () => {
  let component: TagihanComponent;
  let fixture: ComponentFixture<TagihanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagihanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagihanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
