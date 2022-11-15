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
}
