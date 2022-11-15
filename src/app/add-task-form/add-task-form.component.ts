import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl} from '@angular/forms';

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.css']
})
export class AddTaskFormComponent implements OnInit {

  @Output() readonly taskAdded = new EventEmitter<any>();

  todoForm : FormGroup<{
    taskname: FormControl<string | null>;
    taskdescription: FormControl<string | null>;
  }>;

  constructor(private fb : FormBuilder) {
    //build the form here
    this.todoForm = fb.group({
      taskname: '',
      taskdescription: ''
    })

  }

  addTask(): void {
    //handle the submission
    this.taskAdded.emit(this.todoForm.value)
    this.todoForm.reset();
  }

  ngOnInit(): void {

  }

}
