import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.authService.isAuthenticated().pipe(
      map((val) => {
        if (val.decoded) {
          return true; // Allow navigation
        } else {
          this.router.navigate(['/login'], {
            queryParams: { error: 'No user is authenticated. Please log in' },
          });
          return false; // Prevent navigation
        }
      }),
      catchError(() => {
        this.router.navigate(['/login'], {
          queryParams: { error: 'No user is authenticated. Please log in' },
        });
        return of(false); // Prevent navigation
      })
    );
  }
}
