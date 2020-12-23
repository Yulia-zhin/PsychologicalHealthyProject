import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Answer } from 'src/app/models/answer';
import { TestAnswersService } from 'src/app/services/test-answers.service';

@Component({
  selector: 'app-test-answers',
  templateUrl: './test-answers.component.html',
  styleUrls: ['./test-answers.component.scss']
})
export class TestAnswersComponent implements OnInit {

  answers: Answer[] =[]
  id: number;

  constructor(private ta:TestAnswersService,private activeRoute: ActivatedRoute) {
    this.id = Number.parseInt(activeRoute.snapshot.params["id"]);
  }
    ngOnInit(): void {
      this.ta.getAnswersByQuestionId(this.id)
      .subscribe(res => {
        this.answers=res
    })
  }
}
  