import { Component, inject } from '@angular/core';
import { AuthService } from './auth.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
/*   styleUrls: ['./auth.component.css'] */
})
export class AuthComponent {

  private authService:AuthService = inject(AuthService);

  login = (email:string, pass: string) => {
    console.log("hi1");
    
    this.authService.login(email, pass).subscribe(v=>console.log(v))
  }
}
