import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TasksService } from '../tasks.service';
import { Itask } from '../models/task';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  task! : Itask;
  id: number;

  todoForm : FormGroup<{
    taskname: FormControl<string | null>;
    taskdescription: FormControl<string | null>;
    taskid: FormControl<string | null>;
    taskstatus: FormControl<string | null>;
  }>;

  constructor(private fb : FormBuilder, private tasksService: TasksService, private route: ActivatedRoute) {
    this.id = Number(this.route.snapshot.paramMap.get('taskId'));
    this.todoForm = this.fb.group({
      taskname: this.fb.control('', [Validators.required]),
      taskdescription: this.fb.control(''),
      taskid: this.fb.control(''),
      taskstatus: this.fb.control('')
    })
   }


  editTask = () => {

    let newTask: Itask = {
      id: this.task.id,
      title: this.todoForm.value.taskname!,
      description: this.todoForm.value.taskdescription!,
      status: this.task.status
    };

    this.tasksService.editTask(newTask);
  }

  ngOnInit(): void {
    this.task = this.tasksService.getTaskById(this.id);
    this.todoForm = this.fb.group({
      taskname: this.fb.control(this.task.title, [Validators.required]),
      taskdescription: this.fb.control(this.task.description),
      taskid: this.fb.control(this.task.id.toString()),
      taskstatus: this.fb.control(this.task.status ? "Done" : "To do")
    })

  }

}
