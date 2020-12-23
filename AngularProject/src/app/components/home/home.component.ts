import { Component, OnInit } from '@angular/core';
import { Lesson } from 'src/app/models/lesson';
import { LessonstoreService } from 'src/app/services/lessonstore.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



  constructor(private ls: LessonstoreService) { }

  ngOnInit(): void {
  }

}
