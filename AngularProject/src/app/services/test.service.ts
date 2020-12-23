import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { STORE_API_URL } from '../app-injection-tokens';
import { Question } from '../models/question';
import { Test } from '../models/test';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private baseApiUrl =`${this.apiUrl}api/`  
  constructor(private http: HttpClient, @Inject(STORE_API_URL) private apiUrl: string) { }


  getTestCatalog(): Observable<Test[]>{
    return this.http.get<Test[]>(`${this.baseApiUrl}tests`)
  }

}
