import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './_guards/auth.guard';
import { NonAuthGuard } from './_guards/non-auth.guard';

const routes: Routes = [
  {
      path: 'auth',
      loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),
      canLoad: [NonAuthGuard]
  },
  {
    path: 'main',
    loadChildren: () => import('./modules/jobs/jobs.module').then(m => m.JobsModule),
    canLoad: [AuthGuard]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
