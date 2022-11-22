import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoComponent } from './todo.component';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [ TodoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    component.tasks = [
      {
        "id": 1,
        "title": "Develop functionality to list TODOs",
        "description": "As a user I would like to list my current todos. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, delectus aperiam unde a accusantium sapiente veniam nostrum dolorem laboriosam adipisci officia tenetur similique nam quas. Recusandae pariatur odio iusto harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates architecto dicta, debitis qui necessitatibus aliquam quibusdam error minus incidunt! Quisquam nesciunt tempora aspernatur rem asperiores aliquid itaque, consectetur nihil quos iure magnam molestias eveniet quasi alias officiis veritatis velit corrupti debitis. Odio iste possimus, voluptatem blanditiis eos sit. Dignissimos distinctio nisi repudiandae nobis quibusdam perferendis perspiciatis corporis ipsa. Voluptate, fugiat.",
        "status": true,
        "updatedAt": 1668625195547
      },
      {
        "id":2,
        "title": "Add \"done\" checkboxxxx",
        "description": "When a todo is done, it should be placed at the bottom of the list and should be crossed out. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, delectus aperiam unde a accusantium sapiente veniam nostrum dolorem laboriosam adipisci officia tenetur similique nam quas. Recusandae pariatur odio iusto harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates architecto dicta, debitis qui necessitatibus aliquam quibusdam error minus incidunt! Quisquam nesciunt tempora aspernatur rem asperiores aliquid itaque, consectetur nihil quos iure magnam molestias eveniet quasi alias officiis veritatis velit corrupti debitis. Odio iste possimus, voluptatem blanditiis eos sit. Dignissimos distinctio nisi repudiandae nobis quibusdam perferendis perspiciatis corporis ipsa. Voluptate, fugiat.",
        "status": false,
        "updatedAt": 1668625316278
      },
      {
        "id":3,
        "title": "Create form to add a new todo",
        "description": "As a user I would like to add a new todo in my list. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, delectus aperiam unde a accusantium sapiente veniam nostrum dolorem laboriosam adipisci officia tenetur similique nam quas. Recusandae pariatur odio iusto harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates architecto dicta, debitis qui necessitatibus aliquam quibusdam error minus incidunt! Quisquam nesciunt tempora aspernatur rem asperiores aliquid itaque, consectetur nihil quos iure magnam molestias eveniet quasi alias officiis veritatis velit corrupti debitis. Odio iste possimus, voluptatem blanditiis eos sit. Dignissimos distinctio nisi repudiandae nobis quibusdam perferendis perspiciatis corporis ipsa. Voluptate, fugiat.",
        "status": false,
        "updatedAt": 1668625324482
      }
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
