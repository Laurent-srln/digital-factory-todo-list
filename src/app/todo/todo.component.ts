import { Component, OnInit } from '@angular/core';
import { Itask } from '../models/task';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  tasks : Itask [] = this.tasksService.getTasks();

  changeTaskStatus = (evt: any) => {
    this.tasksService.changeTaskStatus(evt);
    }

  addNewTask = (evt: any) => {

    let maxId = Math.max(...this.tasks.map(e => e.id));
    let newTask: Itask = {
      id: maxId+1,
      title: evt.taskname,
      description: evt.taskdescription,
      status: false
    };

    this.tasksService.addTasks(newTask);
  }

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
  }

}
