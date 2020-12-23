import { Component, OnInit } from '@angular/core';
import { HelpTask } from 'src/app/models/helpTask';
import { AdminServicesService } from 'src/app/services/admin-services.service';

@Component({
  selector: 'app-admin-list-task',
  templateUrl: './admin-list-task.component.html',
  styleUrls: ['./admin-list-task.component.scss']
})
export class AdminListTaskComponent implements OnInit {


  constructor(private as: AdminServicesService) { }

  htask: HelpTask[]; 
  htaskAll: HelpTask[]; 
  htaskName: string[]=[]; 
finishFlag = false;

  ngOnInit(): void {
    this.as.getCurrentTaskCatalog()
    .subscribe(res => {
      this.htaskAll = res
      for(var i=0; i<this.htaskAll.length; i++ ){
        if(!this.htaskName.includes(this.htaskAll[i].text))
        {
          this.htaskName.push(this.htaskAll[i].text)
        }
      }
  })
  }

  getFinishTasks(){
    this.htaskName = []
    this.as.getFinishTaskCatalog()
    .subscribe(res => {
        this.htaskAll = res
        for(var i=0; i<this.htaskAll.length; i++ ){
          if(!this.htaskName.includes(this.htaskAll[i].text))
          {
            this.htaskName.push(this.htaskAll[i].text)
          }
        }
    })
    this.finishFlag = true;
  }
  getCurrentTasks(){
    this.htaskName = []
    this.as.getCurrentTaskCatalog()
    .subscribe(res => {
      this.htaskAll = res
      for(var i=0; i<this.htaskAll.length; i++ ){
        if(!this.htaskName.includes(this.htaskAll[i].text))
        {
          this.htaskName.push(this.htaskAll[i].text)
        }
      }
  })
    this.finishFlag = false;
  }
}
