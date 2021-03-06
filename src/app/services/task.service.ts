import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs'
import { Task } from 'src/app/Task';
import {HttpClient, HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiURL= 'http://localhost:5000/tasks'
  constructor(private http: HttpClient) { }
  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiURL)
  }
  deleteTask(task: Task): Observable<Task>{
    const url = `${this.apiURL}/${task.id}`
    return this.http.delete<Task>(url)
  }
}
