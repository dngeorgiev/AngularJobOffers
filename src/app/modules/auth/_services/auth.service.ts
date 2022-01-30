// Import Angular modules
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Import Models
import { UserLogin } from '../models/user-login.model';
import { User } from '../../users/models/user.model';

// Import third-party libraries
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  hasUser = new BehaviorSubject<boolean>(false);

  constructor(
    private http: HttpClient
  ) {
  }

  login(data: UserLogin): Observable<User | null> {
    return this.http.get<User[]>(`${environment.apiUrl}/users`).pipe(
      map((response: User[]) => {
        const user = response.find((u => u.username === data.username && u.password === data.password));

        if (!user) {
          return null;
        }

        return user;
      })
    );
  }

  logout(): void {
    localStorage.removeItem('loggedUser');
    this.setHasUser(false);
  }

  hasPermissions(role: string): boolean {
    const loggedUser = this.getLoggedUserFromLocalStorage();

    return loggedUser.role === role;
  }

  setLoggedUserInLocalStorage(user: User): void {
    delete user.password;

    localStorage.setItem('loggedUser', JSON.stringify(user));

    this.setHasUser(true);
  }

  getLoggedUserFromLocalStorage(): User {
    const sessionUser = localStorage.getItem('loggedUser');
    let loggedUser = null;
    if (sessionUser != null) {
      loggedUser = JSON.parse(sessionUser);
      
      if (loggedUser) {
        this.setHasUser(true);
      }
    }

    if (loggedUser) {
      this.setHasUser(true);
    }

    return loggedUser;
  }

  getHasUser(): Observable<boolean> {
    return this.hasUser.asObservable();
  }

  setHasUser(value: boolean): void {
    this.hasUser.next(value);
  }
}
