import { Component, OnInit } from '@angular/core';
import { Test } from 'src/app/models/test';
import { TestQuestionService } from 'src/app/services/test-question.service';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.scss']
})
export class TestsComponent implements OnInit {

  tests: Test[] =[]

  constructor(private ts:TestService, private tq:TestQuestionService) { }

  ngOnInit(): void {
    this.ts.getTestCatalog()
    .subscribe(res => {
      this.tests=res
    })
  }

}
