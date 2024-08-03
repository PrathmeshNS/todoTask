import { Component } from '@angular/core';
import { User } from '../User';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { PredefineString } from '../predefineString';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  msg = ""

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
      next: (value) => {
        this.router.navigate(['/login'])
      },
      error: (err) => {
        this.responseToUser(err.error.text)
      },
    })
  }

  goToLogin() {
    this.router.navigate(['/login'])
  }

  responseToUser(message: string) {
    if (message == PredefineString.USER_INSERTED_SUCCESSFULLY) {
      this.router.navigate(['/login'])
    }
    else {
      this.msg = message;
    }
  }
}
