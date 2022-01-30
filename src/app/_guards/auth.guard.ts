// Import Angular Modules
import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';

// Import third-party libraries
import { Observable } from 'rxjs';

// Import services
import { AuthService } from '../modules/auth/_services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  canLoad(route: Route): boolean {
    const loggedUser = this.authService.getLoggedUserFromLocalStorage();

    if (!loggedUser) {
      this.router.navigate(['/auth', 'sign-in']);

      return false;
    }

    return true;
  }
}
