import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { of, Subject, switchMap, takeUntil } from 'rxjs';
import { AuthService } from 'src/app/modules/auth/_services/auth.service';
import { User } from 'src/app/modules/users/models/user.model';
import { Job } from '../../models/job.model';
import { JobsService } from '../../_services/jobs.service';

@Component({
  selector: 'app-jobs-form',
  templateUrl: './jobs-form.component.html',
  styleUrls: ['./jobs-form.component.scss']
})
export class JobsFormComponent implements OnInit, OnDestroy {

  currentUser!: User;
  formGroup!: FormGroup;
  destroy = new Subject<boolean>();

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private jobsService: JobsService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.buildForm();

    this.currentUser = this.authService.getLoggedUserFromLocalStorage();

    this.route.params.pipe(
      switchMap((params) => {
        const id = params['id'];

        if (id) {
          return this.jobsService.getJob(id);
        }

        return of(null);
      }),
      takeUntil(this.destroy)
    ).subscribe({
      next: (response) => {
        if (response != null) {
          this.buildForm(response);
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy.next(true);
    this.destroy.unsubscribe();
  }

  onSubmit(): void {
    const job = this.formGroup.value as Job;

    let request;

    if (!job.id) {
      request = this.jobsService.postJob(job);
    } else {
      request = this.jobsService.putJob(job);
    }

    request.subscribe({
      next: () => {
        this.router.navigate(['/main', 'jobs']);
      }
    });
  }

  private buildForm(job?: Job): void {
    this.formGroup = this.fb.group({
      id: job?.id,
      title: [job?.title || '', [Validators.required]],
      description: [job?.description || ''],
      jobCategory: [job?.jobCategory || '', [Validators.required]],
      jobType: [job?.jobType || '', [Validators.required]]
    });
  }

}
