import { Component, OnInit } from '@angular/core';
import { Itask } from '../models/task';
import { TasksApiService } from '../tasks-api.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  // tasks : Itask [] = this.tasksService.getTasks();
  tasks: Itask[];

  private getTasks() {
    this.tasksApiService.getTasks().subscribe((tasks: any[]) => {
      console.log("avant tri", tasks)
      this.tasks = tasks.sort((a:any, b:any) => b.updatedAt-a.updatedAt);
      console.log("après tri", this.tasks)
    }
    )
  }

  changeTaskStatus = (evt: any) => {
  evt.updatedAt = Date.now();
  this.tasksApiService.editTask(evt).subscribe();
  this.getTasks();
}

  addNewTask = (evt: any) => {
    let newTask: Itask = {
      id: 0,
      title: evt.taskname,
      description: evt.taskdescription,
      status: false,
      updatedAt: Date.now()
    };

    this.tasksApiService.addTask(newTask).subscribe((response: Itask) => {
      console.log(response)
      this.getTasks()});
      ;
  }

  constructor( private tasksApiService: TasksApiService) { }

  ngOnInit(): void {
    this.getTasks();
  }

}
