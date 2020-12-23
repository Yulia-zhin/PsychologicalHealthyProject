import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { DailyHealht } from 'src/app/models/dailyHealth';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-daily-health',
  templateUrl: './daily-health.component.html',
  styleUrls: ['./daily-health.component.scss']
})
export class DailyHealthComponent implements OnInit {

  constructor(private us: UsersService) { }

  dailyHealthList: DailyHealht[] = []
  temp = 0
  markMoodNumbers: Number[] = []
  markPosiviteNumbers:  Number[] = []
  markHealthNumbers: Number[] = []

  ngOnInit(): void { 
    this.us.getUserDailyHealth()
    .subscribe(res => {
      this.dailyHealthList = res
      this.getMarks();
    })
  }

  getMarks(){
   for(let element of this.dailyHealthList)
  {
    if(this.dailyHealthList.length-this.temp<6){

      if(element.markMood == 'bad') 
      {
        this.markMoodNumbers[this.temp]=1
      }
      if(element.markMood == 'average') 
      {
        this.markMoodNumbers[this.temp]=2
      }
      if(element.markMood == 'good') 
      {
        this.markMoodNumbers[this.temp]=3
      }
      
      if(element.markHealth == 'bad') 
      {
        this.markHealthNumbers[this.temp]=1
      }
      if(element.markHealth == 'average') 
      {
        this.markHealthNumbers[this.temp]=2
      }
      if(element.markHealth == 'good') 
      {
        this.markHealthNumbers[this.temp]=3
      }

      if(element.markPositive == 'bad') 
      {
        this.markPosiviteNumbers[this.temp]=1
      }
      if(element.markPositive == 'average') 
      {
        this.markPosiviteNumbers[this.temp]=2
      }
      if(element.markPositive == 'good') 
      {
        this.markPosiviteNumbers[this.temp]=3
      }
    }
        this.temp++
    }
  }
}