// Import Angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// Import components
import { JobsComponent } from './components/jobs/jobs.component';
import { JobsIndexComponent } from './components/jobs-index/jobs-index.component';

// Import project modules
import { JobsRoutingModule } from './jobs-routing.module';
import { JobItemComponent } from './components/job-item/job-item.component';
import { JobsFormComponent } from './components/jobs-form/jobs-form.component';
import { JobApplicationsComponent } from './components/job-applications/job-applications.component';
import { JobApplicationItemComponent } from './components/job-application-item/job-application-item.component';

@NgModule({
  declarations: [
    JobsComponent,
    JobsIndexComponent,
    JobItemComponent,
    JobsFormComponent,
    JobApplicationsComponent,
    JobApplicationItemComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    JobsRoutingModule,
    ReactiveFormsModule
  ]
})
export class JobsModule { }
