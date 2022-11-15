import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Itask } from '../models/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task! : Itask

  @Output() readonly taskChanged = new EventEmitter<Itask>();

  changeTaskStatus(): void {
    this.taskChanged.emit(this.task)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
