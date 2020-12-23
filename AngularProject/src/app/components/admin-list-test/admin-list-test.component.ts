import { Component, OnInit } from '@angular/core';
import { Test } from 'src/app/models/test';
import { AdminServicesService } from 'src/app/services/admin-services.service';

@Component({
  selector: 'app-admin-list-test',
  templateUrl: './admin-list-test.component.html',
  styleUrls: ['./admin-list-test.component.scss']
})
export class AdminListTestComponent implements OnInit {

 
  constructor(private as: AdminServicesService) { }

  test: Test[]; 
  testAll: Test[]; 
  testName: string[]=[]; 

  ngOnInit(): void {
    this.as.getTestCatalog()
    .subscribe(res => { this.testAll = res
      for(var i=0; i<this.testAll.length; i++ ){
        if(!this.testName.includes(this.testAll[i].category))
        {
          this.testName.push(this.testAll[i].category)
        }
      }
  })
  }

}
