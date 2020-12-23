import { Component, OnInit} from '@angular/core';
import { Question } from 'src/app/models/question';
import { TestQuestionService } from 'src/app/services/test-question.service';
import { TestsComponent } from '../tests/tests.component';
import { Router, ActivatedRoute } from '@angular/router';
import {TestAnswersComponent} from '../test-answers/test-answers.component'
import { TestAnswersService } from 'src/app/services/test-answers.service';
import { Answer } from 'src/app/models/answer';

@Component({
  selector: 'app-test-questions',
  templateUrl: './test-questions.component.html',
  styleUrls: ['./test-questions.component.scss']
})
export class TestQuestionsComponent implements OnInit {

  questions: Question[] =[]
  answers: Answer[] =[]
  answeredQuestionsID: number[] =[]
  id: number;
  resultTest: number = 0;
  constructor(private ts:TestQuestionService, private router: Router, activeRoute: ActivatedRoute, private ta:TestAnswersService) {
    this.id = Number.parseInt(activeRoute.snapshot.params["id"]);
}

  ngOnInit(): void {
    this.ts.getQuestionsByTestId(this.id)
    .subscribe(res => {
      this.questions=res
  })
  
      this.ta.getAllAnswers().
      subscribe(res => {
        this.answers=res
      })
  }
  clickAnswer(a: Answer){
    this.resultTest+=a.mark;
    this.answeredQuestionsID.push(a.testQuestionsId)
  }
  getTestResult(){
    this.router.navigateByUrl("testKeys/"+this.id+'/'+this.resultTest)
  }
  hideQuestion(qId:number){;
    return this.answeredQuestionsID.includes(qId)
  }
  showButton(){;
    if(this.answeredQuestionsID.length-this.questions.length==0)
      return true
    else
      return false
  }
}
