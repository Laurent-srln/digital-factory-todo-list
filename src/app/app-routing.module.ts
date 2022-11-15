import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';

const routes: Routes = [
  {path:'', component:TodoComponent},
  {path:'tasks/:taskId', component:TaskDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
