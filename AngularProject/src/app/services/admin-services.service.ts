import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { STORE_API_URL } from '../app-injection-tokens';
import { HelpTask } from '../models/helpTask';
import { Lesson } from '../models/lesson';
import { Test } from '../models/test';

@Injectable({
  providedIn: 'root'
})
export class AdminServicesService {

  private baseApiUrlUserTest =`${this.apiUrl}api/UserTests/`  
  private baseApiUrlUserLessons =`${this.apiUrl}api/UserLessons/` 
  private baseApiUrlUserTask =`${this.apiUrl}api/UserHelpTasks/` 
  constructor(private http: HttpClient, @Inject(STORE_API_URL) private apiUrl: string) { }


  getTestCatalog(): Observable<Test[]>{
    return this.http.get<Test[]>(`${this.baseApiUrlUserTest}GetUsersTest`)
  }
  getCurrentLessonCatalog(): Observable<Lesson[]>{
    return this.http.get<Lesson[]>(`${this.baseApiUrlUserLessons}GetCurrentUsersLessons`)
  }
  getCurrentTaskCatalog(): Observable<HelpTask[]>{
    return this.http.get<HelpTask[]>(`${this.baseApiUrlUserTask}GetCurrentUsersTasks`)
  }
  getFinishLessonCatalog(): Observable<Lesson[]>{
    return this.http.get<Lesson[]>(`${this.baseApiUrlUserLessons}GetFinishUsersLessons`)
  }
  getFinishTaskCatalog(): Observable<HelpTask[]>{
    return this.http.get<HelpTask[]>(`${this.baseApiUrlUserTask}GetFinishUsersTasks`)
  }
}
