import { Component, OnInit } from '@angular/core';
import { Lesson } from 'src/app/models/lesson';
import { LessonstoreService } from 'src/app/services/lessonstore.service';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})
export class LessonsComponent implements OnInit {

  lessons: Lesson[] = []
  colums = ['id', 'name', 'description', 'pathAttachment']
  showInfoFlag = false;
  saveFlag = false;

  meditationImagesList = ['http://localhost:50096/images/meditation.jpg',
  'http://localhost:50096/images/meditation2.jpg',
  'http://localhost:50096/images/meditation3.jpg',
  'http://localhost:50096/images/meditation4.jpg',
  'http://localhost:50096/images/meditation5.jpg',
  'http://localhost:50096/images/meditation6.jpg']

  constructor(private ls: LessonstoreService) { }

  ngOnInit(): void {
    this.showInfoFlag=false;
    this.ls.getCatalog()
    .subscribe(res => {
      this.lessons = res
    })
  }

  saveLesson(lesson: Lesson){
    this.ls.saveUserLesson(lesson)
    .subscribe((data: Lesson) => this.saveFlag=true);
  }

  showLesson(id: number){
    this.showInfoFlag=true;
      this.ls.getLessonById(id)
      .subscribe(res => {
        this.lessons = res
      })
   }
   showAllLessons(){     
    return !this.showInfoFlag;
  }
}
