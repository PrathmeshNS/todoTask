import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../task.service';
import { Task } from '../task';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent {

  editTask: Task = {
    taskId: 0,
    taskName: ""
  }

  constructor(private taskService: TaskService, private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getTask(id);
    });
  }

  getTask(id: number): void {
    this.taskService.getTask(id).subscribe((res) => {
      this.editTask = res
    })
  }
  updateTask(): void {
    this.taskService.updateTask(this.editTask).subscribe({
      next: (value) => {
      },
      error: (error) => {
        this.router.navigate(['/addTask'])
      }
    })
  }

}

