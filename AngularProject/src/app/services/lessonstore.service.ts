import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { STORE_API_URL } from '../app-injection-tokens';
import { Lesson } from '../models/lesson'

@Injectable({
  providedIn: 'root'
})
export class LessonstoreService {

  private baseApiUrl =`${this.apiUrl}api/`
  private userLessonApiUrl =`${this.apiUrl}api/userlessons/`
  constructor(private http: HttpClient, @Inject(STORE_API_URL) private apiUrl: string) { }

  getCatalog(): Observable<Lesson[]>{
    return this.http.get<Lesson[]>(`${this.baseApiUrl}lessons`)
  }

  getCurrentUserLessons(): Observable<Lesson[]>{
    return this.http.get<Lesson[]>(`${this.baseApiUrl}userlessons`+ '/CurrentUserLessons')
  }
  getFinishUserLessons(): Observable<Lesson[]>{
    return this.http.get<Lesson[]>(`${this.baseApiUrl}userlessons` +'/FinishUserLessons')
  }
  saveUserLesson(lesson:Lesson){
    return this.http.post(this.baseApiUrl+'userlessons/SaveLesson', lesson);
  }

  getLessonById(testId : number): Observable<Lesson[]>{
    return this.http.get<Lesson[]>(`${this.userLessonApiUrl}${testId}`)
  }

  addUserLessonToFinish(lesson:Lesson)
  {
    return this.http.post(this.baseApiUrl+'userlessons/AddFinishLesson', lesson);
  }
  deleteUserLesson(lesson:Lesson)
  {
    return this.http.post(this.baseApiUrl+'userlessons/DeleteUserLesson', lesson);
  }
}
