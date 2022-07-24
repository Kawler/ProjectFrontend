import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { ShowSubComponent } from './subjects/show-sub/show-sub.component';
import { TeacherComponent } from './teacher/teacher.component';
import { ShowTeaComponent } from './teacher/show-tea/show-tea.component';
import {SharedService} from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ScheduleComponent } from './schedule/schedule.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { DialogTeacherComponent } from './teacher/dialog-teacher/dialog-teacher.component';
import {MatSelectModule} from '@angular/material/select';
import { ShowScheduleComponent } from './schedule/show-schedule/show-schedule.component';
import {RouterModule} from "@angular/router";
import { SubjectsDialogComponent } from './subjects/subjects-dialog/subjects-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    SubjectsComponent,
    ShowSubComponent,
    TeacherComponent,
    ShowTeaComponent,
    ScheduleComponent,
    HomeComponent,
    DialogTeacherComponent,
    ShowScheduleComponent,
    SubjectsDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    RouterModule.forRoot([
      {path:'',pathMatch:'full',redirectTo:'home'},
      {path:'home',component: HomeComponent}
    ])
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
