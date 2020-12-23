import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TestKey } from 'src/app/models/testKey';
import { TestKeysService } from 'src/app/services/test-keys.service';

@Component({
  selector: 'app-test-keys',
  templateUrl: './test-keys.component.html',
  styleUrls: ['./test-keys.component.scss']
})
export class TestKeysComponent implements OnInit {

  testKeys: TestKey[] =[]
  id: number;
  result: number;
resultId: number;
testKey: TestKey = new TestKey();   

saveFlag = false;

  constructor(private tk:TestKeysService,private activeRoute: ActivatedRoute) {
    this.id = Number.parseInt(activeRoute.snapshot.params["id"]),
    this.result = Number.parseInt(activeRoute.snapshot.params["result"])
  }
    ngOnInit(): void {
      this.tk.getTestKeysByTestId(this.id, this.result)
      .subscribe(res => {
        this.testKeys=res
    })
  }
  getResult(){
    for (let i = 0; i < this.testKeys.length; i++) {
      if(this.testKeys[i].maxKey>=this.result && this.testKeys[i].minKey<=this.result)
         { 
          this.resultId=i;
           return( this.testKeys[i].result)           
          }
    }
  }
  saveResult(){
           this.tk.saveUserTestResult(this.testKeys[this.resultId])
           .subscribe((data: TestKey) => this.saveFlag = true)
     }
}
