import { Component,Inject, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { SharedService } from "../../shared.service";
import {MatDialogRef,MAT_DIALOG_DATA} from "@angular/material/dialog"
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-schedule-dialog',
  templateUrl: './schedule-dialog.component.html',
  styleUrls: ['./schedule-dialog.component.css']
})
export class ScheduleDialogComponent implements OnInit {
  nameOfTheDay: Array<string> = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  scheduleForm !: FormGroup;
  actionBtn: string = "Save";
  dataSource:any[]=[];
  constructor(private formBuilder: FormBuilder,
              private service: SharedService,
              @Inject(MAT_DIALOG_DATA) public editData: any,
              private dialogRef: MatDialogRef<ScheduleDialogComponent>) {
  }
  ngOnInit(): void {
    this.getAllSubjects();
    this.scheduleForm = this.formBuilder.group({
      nameOfTheDay: ['', Validators.required],
      subjectName: ['', Validators.required]
    })
    if (this.editData) {
      this.actionBtn = "Update";
      this.scheduleForm.controls['nameOfTheDay'].setValue((this.editData.nameOfTheDay));
      this.scheduleForm.controls['subjectName'].setValue((this.editData.subjectName));
    }
  }

  getAllSubjects(){
    this.service.getSubjectsList().subscribe({
      next:(res)=>{
        this.dataSource = res;
      },
      error:(err)=>{
        alert("error while getting data from database");
      }
    })
  }

  addSchedule() {
    if (!this.editData) {
      if (this.scheduleForm.valid) {
        this.service.addSchedule(this.scheduleForm.value).subscribe({
          next: (res) => {
            alert("Schedule added");
            this.scheduleForm.reset();
            this.dialogRef.close('Saved');
          },
          error: () => {
            console.log(this.scheduleForm.value);
            alert("Error");
          }
        });
      }
    } else {
      if (this.scheduleForm.valid) {
        this.service.updateSchedule(this.scheduleForm.value, this.editData.id)
          .subscribe({
            next: (res) => {
              alert("Edit successful");
              this.scheduleForm.reset();
              this.dialogRef.close('update');
            },
            error: () => {
              alert("Error during update");
            }
          });
      }
    }
  }
}
