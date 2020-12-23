import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LessonsComponent } from './components/lessons/lessons.component'
import { AUTH_API_URL, STORE_API_URL } from './app-injection-tokens';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

import {ACCES_TOKEN_KEY} from './services/auth.service';
import { OrderLessonsComponent } from './components/order-lessons/order-lessons.component';
import { HelpTasksComponent } from './components/help-tasks/help-tasks.component';
import { OrderHelpTasksComponent } from './components/order-help-tasks/order-help-tasks.component';
import { TestsComponent } from './components/tests/tests.component';
import { TestQuestionsComponent } from './components/test-questions/test-questions.component';
import { TestAnswersComponent } from './components/test-answers/test-answers.component';
import { UserTestResultComponent } from './components/user-test-result/user-test-result.component';
import { UsersComponent } from './components/users/users.component';
import { TestKeysComponent } from './components/test-keys/test-keys.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { DailyHealthComponent } from './components/daily-health/daily-health.component';
import { AdminListTestComponent } from './components/admin-list-test/admin-list-test.component';
import { AdminListTaskComponent } from './components/admin-list-task/admin-list-task.component';
import { AdminListLessonComponent } from './components/admin-list-lesson/admin-list-lesson.component'

export function tokenGetter(){
  return localStorage.getItem(ACCES_TOKEN_KEY);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LessonsComponent,
    OrderLessonsComponent,
    HelpTasksComponent,
    OrderHelpTasksComponent,
    TestsComponent,
    TestQuestionsComponent,
    TestAnswersComponent,
    UserTestResultComponent,
    UsersComponent,
    TestKeysComponent,
    RegistrationComponent,
    DailyHealthComponent,
    AdminListTestComponent,
    AdminListTaskComponent,
    AdminListLessonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,

    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    
    JwtModule.forRoot({
      config:{
        tokenGetter,
        allowedDomains: environment.tokenWhiteListedDomains
      }
    })
  ],
  providers: [{
    provide: AUTH_API_URL,
    useValue: environment.authApi
  },
  {
    provide: STORE_API_URL,
    useValue: environment.store
    
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
