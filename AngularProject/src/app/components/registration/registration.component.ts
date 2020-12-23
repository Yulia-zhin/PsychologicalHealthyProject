import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  user: User = new User();   
  usersEmail: string[];
  users: User[];   
  flagRegist = true;            
  constructor(private us: UsersService, private router: Router) { }


    ngOnInit(): void {
      this.us.getUsersEmailsCatalog()
      .subscribe(res => {
        this.usersEmail = res
      })
    }
  save(email: string, psw:string){

    this.flagRegist = true; 
    this.usersEmail.forEach(element => {
      if(element==email)
      {
        this.flagRegist=false;
      }
    } );

    if(email==""&&psw=="")
     { 
       alert("Заполните все поля для регистрации")
    } else if (!this.flagRegist)
    {
      alert("Данный почтовый адрес уже используется")
    }
    else{
      this.user.email=email
      this.user.password = psw
      this.us.createUser(this.user)
      .subscribe((data: User) => this.router.navigateByUrl("/home"));
      alert("Регистрация прошла успешно")
    }
  }

  goToSign(){
    this.router.navigateByUrl("")
  }
}

