import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { Itask } from '../models/task';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  task! : Itask;
  id: number;

  constructor(private tasksService: TasksService, private route: ActivatedRoute) {
    this.id = Number(this.route.snapshot.paramMap.get('taskId'));
   }

  ngOnInit(): void {
    this.task = this.tasksService.getTaskById(this.id);
  }

}
