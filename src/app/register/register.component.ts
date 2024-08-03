import { Component } from '@angular/core';
import { User } from '../User';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  msg= ""

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
        // this.router.navigate(['/login'])
        this.msg = err.error.text
      },
    })
  }

  goToLogin() {
    this.router.navigate(['/login'])
  }
}
