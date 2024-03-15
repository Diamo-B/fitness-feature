import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

const url = "http://localhost:3000/login"

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http:HttpClient = inject(HttpClient);

  login(email:string, pass:string):Observable<any> {    
    return this.http.post(url, {email, password: pass})
  }

  isAuthenticated(): Observable<any> {
    const url:string = "http://localhost:3000/verify";
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem("access-token")}`
    });
    return this.http.get(url,{headers: headers})
  }
}
