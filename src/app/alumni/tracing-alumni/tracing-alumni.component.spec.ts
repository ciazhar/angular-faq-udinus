import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TracingAlumniComponent } from './tracing-alumni.component';

describe('TracingAlumniComponent', () => {
  let component: TracingAlumniComponent;
  let fixture: ComponentFixture<TracingAlumniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TracingAlumniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TracingAlumniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
