import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DailyHealht } from './models/dailyHealth';
import { User } from './models/user';
import { AuthService } from './services/auth.service';
import { UsersService } from './services/users.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: any;

  dailyHeaith: DailyHealht;


  static email:string;
  dailyStatusTest=true;
  dailyStatusMood=true;
  dailyStatusPositive=false;
  dailyStatusHealth=false;

  goSignIn=false;
  goSignUp=false;

  userRole: string[] = []
  userRoleCatalog: User[]= []

  isUser = false;
  isAdmin = false;
  ngOnInit(): void {
 
}

  public get isLoggedIn():boolean{
    return this.as.isAuthenticated()
  }

  public get isAdminIn():boolean{
      if(this.userRole[0]=='Admin')
         {
          this.isUser=false;
          this.isAdmin=true;
           return true;
         }
          
       else
         {
           this.isAdmin=false;
          this.isUser=true;
           return false;
         }
           
  }

  constructor(private as:AuthService, private us:UsersService, private router: Router){
    this.dailyStatusTest=true;
    this.dailyStatusMood=true;
    this.dailyStatusPositive=false;
    this.dailyStatusHealth=false;
    this.dailyHeaith = new DailyHealht();

  }

  login(email_: string, password:string){
    this.as.login(email_, password)
    .subscribe(res => {
      AppComponent.email=email_
      // this.getRole()
    }, error => {
      alert('Wrong login or password.')
    })
  }
  
  logout(){
    this.isUser=false;
    this.isAdmin=false;
    AppComponent.email=""
    this.as.logout()
  }

  goToRegistration(){
    AppComponent.email=""
    UsersService.isRegistration=true;
    this.goSignUp = true;    
    this.router.navigateByUrl("registration")
  }

   public get isAdminEmail(){
     if(AppComponent.email=="admin@email.com")
       {
         UsersService.isRegistration=false;
         return true;
       }
     return false;
   }

  setDailyStatusMood(status: string){
    //alert(status)
    this.dailyStatusMood=false;
    this.dailyStatusPositive=true;
    this.dailyStatusHealth=false;

    this.dailyHeaith.markMood=status;
  }
  setDailyStatusPositive(status: string){
    //alert(status)
    this.dailyStatusMood=false;
    this.dailyStatusPositive=false;
    this.dailyStatusHealth=true;

    this.dailyHeaith.markPositive=status;
  }
  setDailyStatusHealth(status: string){
    //alert(status)
    this.dailyStatusMood=false;
    this.dailyStatusPositive=false;
    this.dailyStatusHealth=false;
    this.dailyHeaith.markHealth=status;
    this.us.setDailyUserStatus(this.dailyHeaith)
    .subscribe((data: DailyHealht) =>     this.dailyStatusTest=false);
  }

  signInClick(){
    this.goSignIn=true;
    this.goSignUp=false;
  }
  getRole(){
    this.us.getUserRole()
    .subscribe(res => {
      this.userRole=res
  })
  }
}
