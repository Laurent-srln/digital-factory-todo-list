import { Injectable } from '@angular/core';
import { Itask } from './models/task';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TasksApiService {

  addTask(task: any): Observable<any> {
    task.id= null;
    console.log(task)
    return this.http.post(`api/tasks/`, task).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  getTasks(): Observable<Itask[]> {
    return this.http.get<Itask[]>('api/tasks/').pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  getTaskById(id: number): Observable<Itask> {
    return this.http.get<Itask>(`api/tasks/${id}`).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  editTask(task: Itask): Observable<any> {
    return this.http.put(`api/tasks/${task.id}`, task).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  constructor(private http: HttpClient) { }
}
