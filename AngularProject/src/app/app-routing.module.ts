import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminListLessonComponent } from './components/admin-list-lesson/admin-list-lesson.component';
import { AdminListTaskComponent } from './components/admin-list-task/admin-list-task.component';
import { AdminListTestComponent } from './components/admin-list-test/admin-list-test.component';
import { DailyHealthComponent } from './components/daily-health/daily-health.component';
import { HelpTasksComponent } from './components/help-tasks/help-tasks.component';
import { HomeComponent } from './components/home/home.component';
import { LessonsComponent } from './components/lessons/lessons.component';
import { OrderHelpTasksComponent } from './components/order-help-tasks/order-help-tasks.component';
import { OrderLessonsComponent } from './components/order-lessons/order-lessons.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { TestAnswersComponent } from './components/test-answers/test-answers.component';
import { TestKeysComponent } from './components/test-keys/test-keys.component';
import { TestQuestionsComponent } from './components/test-questions/test-questions.component';
import { TestsComponent } from './components/tests/tests.component';
import { UserTestResultComponent } from './components/user-test-result/user-test-result.component';
import { UsersComponent } from './components/users/users.component';
import { AuthGuard } from './duards/auth.guard';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'lessons', component: LessonsComponent},
  {path: 'mylessons', component: OrderLessonsComponent, canActivate: [AuthGuard]},
  {path: 'tasks', component: HelpTasksComponent},
  {path: 'mytasks', component: OrderHelpTasksComponent, canActivate: [AuthGuard]},
  {path: 'tests', component: TestsComponent},
  {path: 'tests/questions/:id', component: TestQuestionsComponent},
  {path: 'tests/questions/answers/:id', component: TestAnswersComponent},
  {path: 'userTestResults', component: UserTestResultComponent},
  {path: 'user', component: UsersComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'testKeys/:id/:result', component: TestKeysComponent},
  {path: 'dailyHealth', component: DailyHealthComponent},
  {path: 'home', component: HomeComponent},
  {path: 'listLesson', component: AdminListLessonComponent},
  {path: 'listTask', component: AdminListTaskComponent},
  {path: 'listTest', component: AdminListTestComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
