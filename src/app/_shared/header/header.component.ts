// Import Angular modules
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Import third-party libraries
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// Import services
import { AuthService } from '../../modules/auth/_services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  hasUser: boolean = false;

  destroy = new Subject<boolean>();

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.getHasUser().pipe(
      takeUntil(this.destroy)
    ).subscribe({
      next: (hasUser) => {
        this.hasUser = hasUser;
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy.next(true);
    this.destroy.unsubscribe();
  }

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/auth', 'sign-in']);
  }

}
