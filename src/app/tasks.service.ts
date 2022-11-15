import { Injectable } from '@angular/core';
import { Itask } from './models/task';
import tasks from './data.json';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  getTasks(): Itask[] {
    return tasks;
  }

  changeTaskStatus = (task: Itask) => {
    let index = tasks.map(e => e.id).indexOf(task.id);
    tasks[index].status = tasks[index].status ? false : true;
    if (tasks[index].status) {
      tasks.push(tasks.splice(index,1)[0]);
    } else {
      tasks.unshift(tasks.splice(index,1)[0]);
    }
    }
}
