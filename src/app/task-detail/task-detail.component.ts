import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Itask } from '../models/task';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TasksApiService } from '../tasks-api.service';

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

  constructor(private fb : FormBuilder, private tasksApiService: TasksApiService, private route: ActivatedRoute) {
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
      status: this.task.status,
      updatedAt: Date.now()
    };

    this.tasksApiService.editTask(newTask).subscribe((response:any) => console.log(response));
  }

  private getTask(id: number) {
    this.tasksApiService.getTaskById(id).subscribe((task: any) => {
      this.task = task;
      this.todoForm = this.fb.group({
        taskname: this.fb.control(this.task.title, [Validators.required]),
        taskdescription: this.fb.control(this.task.description),
        taskid: [{value: this.task.id!.toString(), disabled: true}],
        taskstatus: [{value: this.task.status ? "Done" : "To do", disabled: true}]
      })
    }
    )
  }

  ngOnInit(): void {
    this.getTask(this.id);


  }

}
