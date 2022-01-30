// Import Angular modules
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Import models
import { Job } from '../models/job.model';

// Import third-party libraries
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { JobApplication } from '../models/job-application.model';
import { JobLike } from '../models/job-like.model';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(
    private http: HttpClient
  ) {}

  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(`${environment.apiUrl}/jobs`);
  }

  getJob(id: number): Observable<Job> {
    return this.http.get<Job>(`${environment.apiUrl}/jobs/${id}`);
  }

  postJob(job: Job): Observable<Job> {
    return this.http.post<Job>(`${environment.apiUrl}/jobs`, job);
  }

  putJob(job: Job): Observable<Job> {
    return this.http.put<Job>(`${environment.apiUrl}/jobs/${job.id}`, job);
  }

  deleteJob(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/jobs/${id}`);
  }

  getJobApplications(jobId: number): Observable<JobApplication[]> {
    return this.http.get<JobApplication[]>(`${environment.apiUrl}/job_applications?jobsId=${jobId}&_expand=users`);
  }

  likeJob(jobLike: JobLike): Observable<JobLike> {
    return this.http.post<JobLike>(`${environment.apiUrl}/job_likes`, jobLike);
  }

  applyForJob(jobApplication: JobApplication): Observable<JobApplication> {
    return this.http.post<JobApplication>(`${environment.apiUrl}/job_applications`, jobApplication);
  }

  approveJobApplication(jobApplication: JobApplication): Observable<JobApplication> {
    jobApplication.status = "approved";
    return this.http.put<JobApplication>(`${environment.apiUrl}/job_applications/${jobApplication.id}`, jobApplication);
  }

  rejectJobApplication(jobApplication: JobApplication): Observable<JobApplication> {
    jobApplication.status = "rejected";
    return this.http.put<JobApplication>(`${environment.apiUrl}/job_applications/${jobApplication.id}`, jobApplication);
  }
}
