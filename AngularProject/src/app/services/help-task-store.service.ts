import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { STORE_API_URL } from '../app-injection-tokens';
import { HelpTask } from '../models/helpTask';
import { TaskCategories } from '../models/taskCategories';

@Injectable({
  providedIn: 'root'
})
export class HelpTaskStoreService {

  private baseApiUrl =`${this.apiUrl}api/`
  private baseApiUrlUserHelpTask =`${this.apiUrl}api/userHelpTasks/`
  constructor(private http: HttpClient, @Inject(STORE_API_URL) private apiUrl: string) { }

  getHelpTask(): Observable<string[]>{
    return this.http.get<string[]>(`${this.baseApiUrl}HelpTasks/GetHelpTaskCategory`)
  }

  getUserCurrentTask(): Observable<HelpTask[]>{
    return this.http.get<HelpTask[]>(`${this.baseApiUrlUserHelpTask}GetCurrentUserHelpTask`)
  }
  
  getUserFinishTask(): Observable<HelpTask[]>{
    return this.http.get<HelpTask[]>(`${this.baseApiUrlUserHelpTask}GetFinishUserHelpTask`)
  }

  getHelpTaskByCategory(testId : string): Observable<HelpTask[]>{
    return this.http.get<HelpTask[]>(`${this.baseApiUrl}HelpTasks/`+testId)
  }
  getHelpTaskInfo(testId : string): Observable<HelpTask[]>{
    return this.http.get<HelpTask[]>(`${this.baseApiUrl}HelpTasks/`+testId)
  }
  saveUserTask(helpTask:HelpTask){
    return this.http.post(this.baseApiUrlUserHelpTask+'SaveHelpTask', helpTask);
  }

   getHelpTaskById(testId : number): Observable<HelpTask[]>{
    return this.http.get<HelpTask[]>(`${this.baseApiUrlUserHelpTask}${testId}`)
   }

  addUserHelpTaskToFinish(helpTask:HelpTask)
  {
    return this.http.post(this.baseApiUrlUserHelpTask+'AddFinishHelpTask', helpTask);
  }
  deleteUserHelpTask(helpTask:HelpTask)
  {
    return this.http.post(this.baseApiUrlUserHelpTask+'DeleteUserHelpTask', helpTask);
  }

  getUserRecommendetTask(): Observable<string[]>{
    return this.http.get<string[]>(`${this.baseApiUrl}HelpTasks/GetHelpTaskCategoryForUser`)
  }

}
