import { Component, Input, OnInit } from '@angular/core';
import { Itask } from '../models/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task! : Itask

  constructor() { }

  ngOnInit(): void {
  }

}
