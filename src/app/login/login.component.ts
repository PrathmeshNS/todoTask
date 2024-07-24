import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { User } from '../User';
import { Task } from '../task';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  tasks: Task[] = []

   msg = "";
  form: User = {
    id: 0,
    name: "",
    email: '',
    password: '',
   
  }
  constructor(private router: Router, private loginService: LoginService) {
  }

  onSubmit() {
    this.loginService.checkUser(this.form).subscribe( {
     next:(value)=>{
        if (value != null) { 
          this.loginService.myUser = this.form;
          // console.log(this.loginService.myUser)
          this.loginService.myUser.id = value.id
          this.loginService.myUser.name = value.name
          this.form = value;
          // console.log(this.loginService.myUser)
          this.router.navigate(['/addTask']);
        }
        else{}
     },
     error(err) {
         console.log(err);
     },
    });
  }

  gotoRegister() {
    this.router.navigate(['/register']);
  }
}
