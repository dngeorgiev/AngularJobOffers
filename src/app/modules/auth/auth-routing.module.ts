// Import Angular modules
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

// Import components
import { AuthComponent } from './components/auth/auth.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

const routes: Route[] = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'sign-in',
        component: SignInComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'sign-in'
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
export class AuthRoutingModule { }
