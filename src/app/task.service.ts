import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from './task';
import { Observable } from 'rxjs';
import { addTask } from './addTask';

@Injectable({
  providedIn: 'root'
})
export class TaskService {


  private api = "http://localhost:8080/task"
  constructor(private http: HttpClient) { }


  addTask(task: addTask) {
    return this.http.post<addTask>(this.api + "/insert", task);
  }

  // getTasks() {
  //   return this.http.get<Task[]>(this.api);
  // }


  getTask(id: number) {
    return this.http.get<any>(`${this.api + "/byId"}/${id}`);
  }

  deleteTask(id: number) {
    return this.http.delete<any>(`${this.api + "/delete"}/${id}`);
  }

  updateTask(task: Task): Observable<any> {
    return this.http.post<Task>(this.api + "/update", task);
  }
}
