// Import Angular modules
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// Import Models
import { UserLogin } from '../../models/user-login.model';

// Import Services
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  formGroup: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  constructor(
      private fb: FormBuilder,
      private router: Router,
      private authService: AuthService,
    ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const body = this.formGroup.value as UserLogin;

    this.authService.login(body).subscribe({
      next: (user) => {
        if (user != null) {
          this.authService.setLoggedUserInLocalStorage(user);
          this.router.navigate(['/main']);
        } else {
          console.error('Unknown credentials');
        }
      }
    });
  }

}
