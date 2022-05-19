import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import {TaskService} from 'src/app/services/task.service'
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[]= [];
  //Now we bring import class TaskService so that we can create
  //an object of tht type called taskService
  constructor(private taskService: TaskService) {}
  //Now we just call the getTasks() method of the object taskService
  //that belongs to class TaskService and put it in tasks variable
  //The fn ngOnInit() runs when component is initialized
  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks)=>{
      this.tasks = tasks
    })
  }
  deleteTask(task: Task){
    this.taskService.deleteTask(task).subscribe((task)=>{
      //console.log(`Task deleted`);
      this.tasks= this.tasks.filter((t)=>t.id !== task.id)
      
    })
  }
}
