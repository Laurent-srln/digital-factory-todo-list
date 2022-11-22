import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskComponent } from './task.component';

describe('TaskComponent', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;
  let checkbox: HTMLInputElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskComponent);
    component = fixture.componentInstance;
    component.task = {
      id: 1000,
      title: "test-task",
      description: "test-description",
      status: false,
      updatedAt: Date.now()
    };
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly render the passed @Input value', () => {
    let title = fixture.debugElement.nativeElement.querySelector('mat-card-title')
    expect(title.textContent).toBe('test-task');
  });

  it('should emit @Output when checkbox changes', () => {
    checkbox = fixture.nativeElement.querySelector('mat-checkbox');
    spyOn(component.taskChanged, 'emit');
    checkbox.dispatchEvent(new Event('change'));
    expect(component.taskChanged.emit).toHaveBeenCalledWith(component.task);
  });
});
