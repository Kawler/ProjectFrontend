import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";

import {SubjectsComponent} from './subjects/subjects.component';
import {TeacherComponent} from './teacher/teacher.component';
import {ScheduleComponent} from './schedule/schedule.component';

const routes: Routes = [
  {path:'subjects',component:SubjectsComponent},
  {path:'teacher',component:TeacherComponent},
  {path:'schedule',component:ScheduleComponent}

];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot((routes))
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
