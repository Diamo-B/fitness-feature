import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from './auth.service';
import {  ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnInit {

  private authService:AuthService = inject(AuthService);
  private router:Router = inject(Router);
  private route: ActivatedRoute = inject(ActivatedRoute)
  public error:string = "";

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.error = params['error']
      setTimeout(()=>{
        this.error = ""
      },2500)
    });
  }

  login = (email:string, pass: string) => {
    this.authService.login(email, pass).subscribe({
      next:(v) => {
        if(v.token){
          localStorage.setItem("access-token",v.token)
          this.router.navigate(["/home"])
        }
      },
      error:(err) =>{
        console.log(err);
        this.error = err.error.message
        setTimeout(()=>{
          this.error = ""
        },2500)
      }
    })
  }
}
