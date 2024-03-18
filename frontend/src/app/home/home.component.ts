import { Component, OnInit, inject } from '@angular/core';
import { RunningService } from '../services/running.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  /* styleUrls: ['./home.component.css'] */
})
export class HomeComponent implements OnInit {
  runningCaloriesErrors: boolean = false;
  private runningService: RunningService = inject(RunningService);
  private authService: AuthService = inject(AuthService);
  ngOnInit() {
    this.runningService.hasErrors$.subscribe((state) => {
      this.runningCaloriesErrors = state;
    });
  }

  logout() {
    this.authService.logOut()
  }
}
