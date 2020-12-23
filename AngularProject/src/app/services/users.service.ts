import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { STORE_API_URL } from '../app-injection-tokens';
import { UsersComponent } from '../components/users/users.component';
import { DailyHealht } from '../models/dailyHealth';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  private baseApiUrlCreateUser =`${this.apiUrl}api/Users/Create`  
  private baseApiUrlGetRole =`${this.apiUrl}api/Users/GetRole` 
  private baseApiUrl =`${this.apiUrl}api/Users/`  
  private baseApiUrlSetDailyUserStatus =`${this.apiUrl}api/Users/SetDailyUserStatus`
  public static isRegistration=true;

  constructor(private http: HttpClient, @Inject(STORE_API_URL) private apiUrl: string) { }

  createUser(user: User) {
    return this.http.post(this.baseApiUrlCreateUser, user);
  }

  getUserRole(): Observable<string[]>{
    return this.http.get<string[]>(`${this.apiUrl}api/Users/GetRole`)
  }
  getUsersCatalog(): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseApiUrl}Users`)
  }

  getUsersEmailsCatalog(): Observable<string[]>{
    return this.http.get<string[]>(`${this.baseApiUrl}GetAllUsersEmail`)
  }
  setDailyUserStatus(dailyHealht: DailyHealht) {
    return this.http.post(this.baseApiUrlSetDailyUserStatus, dailyHealht);
  }

  getUserDailyHealth(): Observable<DailyHealht[]>{
    return this.http.get<DailyHealht[]>(`${this.baseApiUrl}GetDailyUserStatus`)
  }
}
