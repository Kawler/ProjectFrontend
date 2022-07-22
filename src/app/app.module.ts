import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { ShowSubComponent } from './subjects/show-sub/show-sub.component';
import { AddEditSubComponent } from './subjects/add-edit-sub/add-edit-sub.component';
import { TeacherComponent } from './teacher/teacher.component';
import { ShowTeaComponent } from './teacher/show-tea/show-tea.component';
import { AddEditTeaComponent } from './teacher/add-edit-tea/add-edit-tea.component';
import {SharedService} from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ScheduleComponent } from './schedule/schedule.component';


@NgModule({
  declarations: [
    AppComponent,
    SubjectsComponent,
    ShowSubComponent,
    AddEditSubComponent,
    TeacherComponent,
    ShowTeaComponent,
    AddEditTeaComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
