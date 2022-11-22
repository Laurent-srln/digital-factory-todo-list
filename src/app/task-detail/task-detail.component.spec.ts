import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDetailComponent } from './task-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TaskDetailComponent', () => {
  let component: TaskDetailComponent;
  let fixture: ComponentFixture<TaskDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        HttpClientTestingModule
      ],
      declarations: [ TaskDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskDetailComponent);
    component = fixture.componentInstance;
    component.task = {
      id: 1000,
      title: "test-task",
      description: "test-description",
      status: false,
      updatedAt: Date.now()
    };
    component.id = 1000;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly render the task data', () => {
    component.ngOnInit();
    let title = fixture.debugElement.nativeElement.querySelector('.name')
    expect(title.value).toBe('Develop functionality to list TODOs');
  });
});
