import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Injectable, Inject } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { AUTH_API_URL, STORE_API_URL } from '../app-injection-tokens';
import { Router } from '@angular/router'
import { delay, mergeMap, tap } from 'rxjs/operators';
import { Token } from '../models/token';

export const ACCES_TOKEN_KEY ='store_access_token'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    @Inject(STORE_API_URL) private apiUrl: string,
    private jwtHelper: JwtHelperService,
    private router: Router
  ) { }
  
  login(email: string, password: string): Observable<Token>{
    return this.http.post<Token>(`${this.apiUrl}api/auth/login`, {
      email, password
    }).pipe(
      tap(token => {
        localStorage.setItem(ACCES_TOKEN_KEY, token.access_token);
      })
    )
  }

  isAuthenticated(): boolean{
    var token = localStorage.getItem(ACCES_TOKEN_KEY);
    return token && !this.jwtHelper.isTokenExpired(token);
  }

  logout(): void {
    localStorage.removeItem(ACCES_TOKEN_KEY);
    this.router.navigate(['']);
  }

  // showAdminPanel():Observable<boolean>{
  //  if(this.isAuthenticated())
  //   { 
  //     return this.http.get<boolean>(`http://localhost:50096/api/Users/GetRole`)
  //   }
  //   else
  //   {
  //     return this.http.get<boolean>(`http://localhost:50096/api/Users/GetFalse`)
  //   }
  // }
}
