import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsShowComponent } from './jobs-show.component';

describe('JobsShowComponent', () => {
  let component: JobsShowComponent;
  let fixture: ComponentFixture<JobsShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobsShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
