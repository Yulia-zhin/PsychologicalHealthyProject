import { Component, OnInit } from '@angular/core';
import { Lesson } from 'src/app/models/lesson';
import { ListNameCount } from 'src/app/models/listNameCount';
import { AdminServicesService } from 'src/app/services/admin-services.service';

@Component({
  selector: 'app-admin-list-lesson',
  templateUrl: './admin-list-lesson.component.html',
  styleUrls: ['./admin-list-lesson.component.scss']
})
export class AdminListLessonComponent implements OnInit {

  constructor(private as: AdminServicesService) { }

  lessonsAll: Lesson[]; 
  lessons: Lesson[]=[]; 
  lessonsName: string[]=[]; 
  finishFlag = false;
  n = 1;
  lnc = new ListNameCount()
  ngOnInit(): void {
    this.as.getCurrentLessonCatalog()
    .subscribe(res => {
      this.lessonsAll = res
      for(var i=0; i<this.lessonsAll.length; i++ ){
        if(!this.lessonsName.includes(this.lessonsAll[i].name))
        {
          this.lessonsName.push(this.lessonsAll[i].name)
        }
      }
  })
  }

  getFinishLessons(){
    this.lessonsName = []
    this.as.getFinishLessonCatalog()
    .subscribe(res => {
      this.lessonsAll = res
      for(var i=0; i<this.lessonsAll.length; i++ ){
        if(!this.lessonsName.includes(this.lessonsAll[i].name))
        {
          this.lessonsName.push(this.lessonsAll[i].name)
        }
      }
  })
    this.finishFlag = true;
  }

  getCurrentLessons(){
    this.lessonsName = []
    this.as.getCurrentLessonCatalog()
    .subscribe(res => {
      this.lessonsAll = res
      for(var i=0; i<this.lessonsAll.length; i++ ){
        if(!this.lessonsName.includes(this.lessonsAll[i].name))
        {
          this.lessonsName.push(this.lessonsAll[i].name)
        }
      }
  })
    this.finishFlag = false;
  }
}
