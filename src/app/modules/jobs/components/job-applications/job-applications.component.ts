import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of, Subject, switchMap, takeUntil } from 'rxjs';
import { JobApplication } from '../../models/job-application.model';
import { JobsService } from '../../_services/jobs.service';

@Component({
  selector: 'app-job-applications',
  templateUrl: './job-applications.component.html',
  styleUrls: ['./job-applications.component.scss']
})
export class JobApplicationsComponent implements OnInit, OnDestroy {
  jobApplications!: JobApplication[];

  destroy = new Subject<boolean>();

  constructor(
    private route: ActivatedRoute,
    private jobsService: JobsService
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params) => {
        const id = params['id'];

        if (id) {
          return this.jobsService.getJobApplications(id);
        }

        return of(null);
      }),
      takeUntil(this.destroy)
    ).subscribe({
      next: (response) => {
        if (response != null) {
          this.jobApplications = response;
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy.next(true);
    this.destroy.unsubscribe();
  }

  onApprove(jobApplication: JobApplication): void {
    this.jobsService.approveJobApplication(jobApplication).subscribe({
      next: () => {
        // this.jobApplications = this.jobApplications.filter(job => job.id !== id);
      }
    });
  }

  onReject(jobApplication: JobApplication): void {
    this.jobsService.rejectJobApplication(jobApplication).subscribe({
      next: () => {
        // this.jobApplications = this.jobApplications.filter(job => job.id !== id);
      }
    });
  }
}
