import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobApplicationItemComponent } from './job-application-item.component';

describe('JobApplicationItemComponent', () => {
  let component: JobApplicationItemComponent;
  let fixture: ComponentFixture<JobApplicationItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobApplicationItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobApplicationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
