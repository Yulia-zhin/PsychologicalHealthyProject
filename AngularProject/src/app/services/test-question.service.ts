import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { STORE_API_URL } from '../app-injection-tokens';
import { Question } from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class TestQuestionService {
  static getQuestions(idTest: string) {
    throw new Error('Method not implemented.');
  }

  private baseApiUrl =`${this.apiUrl}api/TestQuestions/`
  constructor(private http: HttpClient, @Inject(STORE_API_URL) private apiUrl: string) { }

  getQuestionsByTestId(testId : number): Observable<Question[]>{
    return this.http.get<Question[]>(`${this.baseApiUrl}${testId}`)
  }

}
