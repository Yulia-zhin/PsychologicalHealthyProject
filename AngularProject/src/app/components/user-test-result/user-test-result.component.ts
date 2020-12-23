import { Component, OnInit } from '@angular/core';
import { TestResult } from 'src/app/models/testResult';
import { UserTestResultService } from 'src/app/services/user-test-result.service';

@Component({
  selector: 'app-user-test-result',
  templateUrl: './user-test-result.component.html',
  styleUrls: ['./user-test-result.component.scss']
})
export class UserTestResultComponent implements OnInit {

  result: TestResult[] =[]

  constructor(private ur:UserTestResultService) { }

  ngOnInit(): void {
    this.ur.getTestCatalog()
    .subscribe(res => {
      this.result=res
    })

}
}