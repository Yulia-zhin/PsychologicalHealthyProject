import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { STORE_API_URL } from '../app-injection-tokens';
import { TestKey } from '../models/testKey';
import { TestResult } from '../models/testResult';

@Injectable({
  providedIn: 'root'
})
export class TestKeysService {

  private baseApiUrl =`${this.apiUrl}api/`  
  constructor(private http: HttpClient, @Inject(STORE_API_URL) private apiUrl: string) { }


  getAllTestKeys(): Observable<TestKey[]>{
    return this.http.get<TestKey[]>(`${this.baseApiUrl}TestKeys`)
  }
  getTestKeysByTestId(id: number, result:number): Observable<TestKey[]>{
    return this.http.get<TestKey[]>(`${this.baseApiUrl}TestKeys/${id}`)
  }

  private UrlSaveResult =`${this.apiUrl}api/TestKeys/SaveResult`  

  saveUserTestResult(result: TestKey) {
    return this.http.post(this.UrlSaveResult, result);
  }
}
