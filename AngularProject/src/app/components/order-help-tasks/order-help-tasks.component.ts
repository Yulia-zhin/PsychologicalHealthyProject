import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelpTask } from 'src/app/models/helpTask';
import { TaskCategories } from 'src/app/models/taskCategories';
import { HelpTaskStoreService } from 'src/app/services/help-task-store.service';

@Component({
  selector: 'app-order-help-tasks',
  templateUrl: './order-help-tasks.component.html',
  styleUrls: ['./order-help-tasks.component.scss']
})
export class OrderHelpTasksComponent implements OnInit {

  userHelpTask: HelpTask[] = []
  helpTaskCategoryList: string[] = []

  showAllHelpTask = false;
  showCurrentHelpTask = true;
  showFinishHelpTask = false;
  showRecomHelpTask = false;
  del = false;
  finishCurrentHelpTaskFlag = false;
  constructor(private hs: HelpTaskStoreService, private router: Router) { }

  ngOnInit(): void {
    this.hs.getUserCurrentTask()
    .subscribe(res => {
      this.userHelpTask = res
    })
  }


  currentHelpTask(){
    this.hs.getUserCurrentTask()
    .subscribe(res => {
      this.userHelpTask = res
    })
    this.showCurrentHelpTask=true;
    this.showAllHelpTask=false;
    this.showFinishHelpTask=false;
    this.showRecomHelpTask=false;
    this.finishCurrentHelpTaskFlag=false
  }
  finishHelpTask(){
    this.hs.getUserFinishTask()
    .subscribe(res => {
      this.userHelpTask = res
    })
    this.showCurrentHelpTask=false;
    this.showAllHelpTask=false;
    this.showFinishHelpTask=true;
    this.showRecomHelpTask=false;
    this.finishCurrentHelpTaskFlag=false
  }

  showHelpTask(id: number){
    this.hs.getHelpTaskById(id)
    .subscribe(res => {
      this.userHelpTask = res
    })
    this.showAllHelpTask=false;
    this.showRecomHelpTask=false;
    this.showFinishHelpTask=false;
    this.finishCurrentHelpTaskFlag=false
  }

  finishCurrentHelpTask(helpTask: HelpTask){
    this.showRecomHelpTask=false;
    this.hs.addUserHelpTaskToFinish(helpTask)
    .subscribe((data: HelpTask) =>  this.showRecomHelpTask=false);
    
    this.hs.deleteUserHelpTask(helpTask)
    .subscribe((data: HelpTask) => this.del = false);

    this.finishCurrentHelpTaskFlag=true;
    this.showFinishHelpTask=false;

  }
  recomendetHelpTask(){
    this.showRecomHelpTask=true;
    this.finishCurrentHelpTaskFlag=false
    this.showFinishHelpTask=false;
    this.hs.getUserRecommendetTask()
    .subscribe(res => {
      this.helpTaskCategoryList = res
    })
  }
  
  refreshPage() {
    //
 }
}
