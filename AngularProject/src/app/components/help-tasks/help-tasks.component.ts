import { Component, OnInit } from '@angular/core';
import { HelpTask } from 'src/app/models/helpTask';
import { HelpTaskStoreService } from 'src/app/services/help-task-store.service';

@Component({
  selector: 'app-help-tasks',
  templateUrl: './help-tasks.component.html',
  styleUrls: ['./help-tasks.component.scss']
})
export class HelpTasksComponent implements OnInit {

 
  helpTask: HelpTask[] = []
  helpTaskCategoryList: string[] = []
  colums = ['id', 'text', 'description', 'taskCategoryId']

  categoryListFlag = true
  infoIdFlag = false
  infoCategoryFlag = false
  taskAddedFlag = false;

  constructor(private hs: HelpTaskStoreService) { }

  ngOnInit(): void {
    this.hs.getHelpTask()
    .subscribe(res => {
      this.helpTaskCategoryList = res
    })
  }

  showHelpTaskByCategory(id: string){
    this.categoryListFlag=false;
    this.infoCategoryFlag=true;
      this.hs.getHelpTaskByCategory(id)
      .subscribe(res => {
        this.helpTask = res
      })
   }

   showHelpTaskInfo(id: string){
    this.infoCategoryFlag=false;
    this.infoIdFlag=true;
      this.hs.getHelpTaskInfo(id)
      .subscribe(res => {
        this.helpTask = res
      })
   }
   saveHelpTask(helpTask: HelpTask){
    this.hs.saveUserTask(helpTask)
    .subscribe((data: HelpTask) => this.taskAddedFlag = true);
  }
}
