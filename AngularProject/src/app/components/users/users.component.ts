import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

    user: User = new User();   
    users: User[];               
    tableMode: boolean = true;  
    isRegistration=false;
  constructor(private us: UsersService) { }

  ngOnInit(): void {
    if(UsersService.isRegistration)
    {
      this.isRegistration=true;
    }
    this.us.getUsersCatalog()
    .subscribe(res => {
      this.users = res
    })

  }
  save(){
  this.us.createUser(this.user)
  .subscribe((data: User) => alert("ok"));}
  }

