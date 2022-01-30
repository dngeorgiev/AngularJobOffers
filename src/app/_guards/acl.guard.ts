// Import Angular modules
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

// Import third-party libraries
import { Observable } from 'rxjs';

// Import services
import { AuthService } from '../modules/auth/_services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AclGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.authService.hasPermissions('admin')) {
      this.router.navigate(['/jobs']);

      return false;
    }

    return true;
  }
  
}
