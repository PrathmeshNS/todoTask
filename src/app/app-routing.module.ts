import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskAppComponent } from './task-app/task-app.component';
import { ShowTaskComponent } from './show-task/show-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },

  {
    path: '', component: LoginComponent
  },
  {
    path: "addTask", component: TaskAppComponent
  },
  {
    path: "show", component: ShowTaskComponent
  },
  {
    path: "edit/:id", component: EditTaskComponent
  },
  {
    path: "register", component: RegisterComponent
  },
  {
    path: "login", component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
