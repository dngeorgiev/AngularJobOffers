// Import Angular modules
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

// Import components
import { JobsComponent } from './components/jobs/jobs.component';
import { JobsIndexComponent } from './components/jobs-index/jobs-index.component';
import { JobsFormComponent } from './components/jobs-form/jobs-form.component';

// Import guards
import { AclGuard } from 'src/app/_guards/acl.guard';
import { JobApplicationsComponent } from './components/job-applications/job-applications.component';

const routes: Route[] = [
  {
    path: '',
    component: JobsComponent,
    children: [
      {
        path: 'jobs',
        component: JobsIndexComponent
      },
      {
        path: 'jobs/create',
        component: JobsFormComponent,
        canActivate: [AclGuard]
      },
      {
        path: 'jobs/edit/:id',
        component: JobsFormComponent,
        canActivate: [AclGuard]
      },
      {
        path: 'jobs/job_applications/:id',
        component: JobApplicationsComponent,
        canActivate: [AclGuard]
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'jobs'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class JobsRoutingModule { }
