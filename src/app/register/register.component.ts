import { Component } from '@angular/core';
import { User } from '../User';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  form: User = {
    id: 0,
    name: "",
    email: "",
    password: "",
  }
  constructor(private router: Router, private loginService: LoginService) {
  }

  onSubmit() {
    this.loginService.addUser(this.form).subscribe({
      next:(value)=> {
        this.router.navigate(['/login'])
      },
      error: (err) => {
        this.router.navigate(['/login'])
      },
    })
  }

  goToLogin() {
    this.router.navigate(['/login'])
  }
}
