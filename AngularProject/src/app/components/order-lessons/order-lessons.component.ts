import { Component, OnInit } from '@angular/core';
import { Lesson } from 'src/app/models/lesson';
import { LessonstoreService } from 'src/app/services/lessonstore.service';

@Component({
  selector: 'app-order-lessons',
  templateUrl: './order-lessons.component.html',
  styleUrls: ['./order-lessons.component.scss']
})
export class OrderLessonsComponent implements OnInit {

  orders: Lesson[] = []
  colums = ['id', 'name', 'description', 'pathAttachment']
  meditationImagesList = ['http://localhost:50096/images/meditation.jpg',
  'http://localhost:50096/images/meditation2.jpg',
  'http://localhost:50096/images/meditation3.jpg',
  'http://localhost:50096/images/meditation4.jpg',
  'http://localhost:50096/images/meditation5.jpg',
  'http://localhost:50096/images/meditation6.jpg']

  showCurrentLesson = true;
  showFinishLesson = false;
  showLessonByIdFlag =false;
  addToFinishFlag = false;
  constructor(private ls: LessonstoreService) { }

  ngOnInit(): void {
    this.ls.getCurrentUserLessons()
    .subscribe(res => {
      this.orders = res
    })
   // this.showAllLessons=true;
  }
  currentLessons(){
    this.ls.getCurrentUserLessons()
    .subscribe(res => {
      this.orders = res
    })
    this.showCurrentLesson=true;
    //this.showAllLessons=false;
    this.showFinishLesson=false;
    this.showLessonByIdFlag =false;
    this.addToFinishFlag=false
  }
  finishLessons(){
    this.ls.getFinishUserLessons()
    .subscribe(res => {
      this.orders = res
    })
    this.showCurrentLesson=false;
    this.showFinishLesson=true;
    this.showLessonByIdFlag =false;
    this.addToFinishFlag=false
    //this.showAllLessons=false;
  }

  showLesson(id: number){
    this.ls.getLessonById(id)
    .subscribe(res => {
      this.orders = res
    })
    this.showLessonByIdFlag = true;
    this.addToFinishFlag=false
    //this.showAllLessons=false;
  }

  finishCurrentLesson(lesson: Lesson){
    this.ls.addUserLessonToFinish(lesson)
    .subscribe((data: Lesson) => this.addToFinishFlag=true);
    
    this.ls.deleteUserLesson(lesson)
    .subscribe((data: Lesson) => this.addToFinishFlag=true);

  }

}
