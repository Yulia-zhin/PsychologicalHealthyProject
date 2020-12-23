import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { STORE_API_URL } from '../app-injection-tokens';
import { Answer } from '../models/answer';
import { Question } from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class TestAnswersService {
  
  private baseApiUrl =`${this.apiUrl}api/TestAnswers/`
  constructor(private http: HttpClient, @Inject(STORE_API_URL) private apiUrl: string) { }

  getAnswersByQuestionId(questionId : number): Observable<Answer[]>{
    return this.http.get<Answer[]>(`${this.baseApiUrl}${questionId}`)
  }
  getAllAnswers(): Observable<Answer[]>{
    return this.http.get<Answer[]>(`${this.baseApiUrl}`)
  }
}
