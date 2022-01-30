// Import Angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// Import components
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AuthComponent } from './components/auth/auth.component';

// Import project modules
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [
    AuthComponent,
    SignInComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
