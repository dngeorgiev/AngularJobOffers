// Import Angular modules
import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';

// Import third-party libraries
import { Observable } from 'rxjs';
import { AuthService } from '../modules/auth/_services/auth.service';

// Import services

@Injectable({
  providedIn: 'root'
})
export class NonAuthGuard implements CanLoad {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canLoad(route: Route): boolean {
    const loggedUser = this.authService.getLoggedUserFromLocalStorage();

    if (loggedUser) {
      this.router.navigate(['/jobs']);

      return false;
    }

    return true;
  }
}
