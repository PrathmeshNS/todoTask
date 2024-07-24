import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task';
import { Route, Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.css']
})
export class ShowTaskComponent {
  

  tasks: Task[] = []

  constructor(private taskService: TaskService, private router:Router, private loginService:LoginService) {}

  getTask(): void {
    this.loginService.checkUser(this.loginService.myUser).subscribe({
      next: (value) => {
        if (value == null ) {
          alert("Please Login First, As a User.")
          this.router.navigate(['/login'])
        }
        this.tasks = value.task
        // this.router.navigate(['/addTask'])
      },
      error:(err)=>{
        console.warn("warn")
      },
    })
   
  }

  ngOnInit(): void {
    this.getTask();
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe({
      error: (error) => {
        this.getTask() 
        console.log("Delete Successfully!!")
      }
    });
  }
}
