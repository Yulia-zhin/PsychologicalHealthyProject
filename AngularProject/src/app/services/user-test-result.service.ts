import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { STORE_API_URL } from '../app-injection-tokens';
import { TestResult } from '../models/testResult';

@Injectable({
  providedIn: 'root'
})
export class UserTestResultService {

  private baseApiUrl =`${this.apiUrl}api/`  
  constructor(private http: HttpClient, @Inject(STORE_API_URL) private apiUrl: string) { }


  getTestCatalog(): Observable<TestResult[]>{
    return this.http.get<TestResult[]>(`${this.baseApiUrl}UserTests`)
  }
}
