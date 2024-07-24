import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task';
import { Router } from '@angular/router';
import { addTask } from '../addTask';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-task-app',
  templateUrl: './task-app.component.html',
  styleUrls: ['./task-app.component.css']
})
export class TaskAppComponent {
  msg: string = ""
  userName = this.loginService.myUser.name;
  newTask: addTask = {
    taskName: "",
    user: {
      id: this.loginService.myUser.id
    }
  }

  constructor(private taskService: TaskService, private router: Router, private loginService: LoginService) {
    
   console.log( loginService.myUser)
  }

  async addTask() {
    console.log("From Main App Task Adding function")
    if (this.newTask.taskName.trim().valueOf() == "") {
    } else {
      this.msg = "Task Added Successfully"
      this.taskService.addTask(this.newTask).subscribe(
        {
          next: (data) => {
            console.log("Im in next ")
          },
          error: (err) => {
            console.log("Im in error ")
          }
        }
      )
    }
    await this.sleep(1800)
    this.router.navigate(['/show']);
    this.newTask.taskName = ""
    this.msg = " "
  }

  sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
}
