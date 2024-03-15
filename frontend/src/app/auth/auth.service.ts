import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

const url = "http://localhost:3000/login"

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http:HttpClient = inject(HttpClient);

  login(email:string, pass:string):Observable<any> {
    console.log("hi");
    
    return this.http.post(url, {email, password: pass})
  }
}
