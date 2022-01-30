// Import Angular modules
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

// Import services
import { AuthService } from 'src/app/modules/auth/_services/auth.service';
import { JobsService } from '../../_services/jobs.service';

// Import models
import { Job } from '../../models/job.model';
import { JobLike } from '../../models/job-like.model';

@Component({
  selector: 'app-jobs-index',
  templateUrl: './jobs-index.component.html',
  styleUrls: ['./jobs-index.component.scss']
})
export class JobsIndexComponent implements OnInit {
  jobs!: Job[];
  hasPermissions: boolean = false;

  constructor(
    private authService: AuthService,
    private jobsService: JobsService
  ) { }

  ngOnInit(): void {
    this.hasPermissions = this.authService.hasPermissions('admin');

    this.jobsService.getJobs().subscribe({
      next: (response: Job[]) => {
        this.jobs = response;
      },
      error: (response: HttpErrorResponse) => {
        console.error(response);
      }
    });
  }

  onLike(id: number): void {
    const jobLike = {
      usersId: this.authService.getLoggedUserFromLocalStorage().id,
      jobsId: id
    } as JobLike;
    this.jobsService.likeJob(jobLike).subscribe(
      {
        next: (response: JobLike) => {
          console.log('success');
        },
        error: (response: HttpErrorResponse) => {
          console.error(response);
        }
      }
    )
  }

  onApply(id: number): void {
    
  }

  onDelete(id: number): void {
    this.jobsService.deleteJob(id).subscribe({
      next: () => {
        this.jobs = this.jobs.filter(job => job.id !== id);
      }
    });
  }

}
