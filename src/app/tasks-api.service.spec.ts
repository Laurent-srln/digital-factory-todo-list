import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { TasksApiService } from './tasks-api.service';

describe('TasksApiService', () => {
  let service: TasksApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(TasksApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
