import { Component,Inject, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { SharedService } from "../../shared.service";
import {MatDialogRef,MAT_DIALOG_DATA} from "@angular/material/dialog"
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-dialog-teacher',
  templateUrl: './dialog-teacher.component.html',
  styleUrls: ['./dialog-teacher.component.css']
})
export class DialogTeacherComponent implements OnInit {
  teacherForm !: FormGroup;
  actionBtn: string = "Save";
  dataSource:any[]=[];
  constructor(private formBuilder: FormBuilder,
              private service: SharedService,
              @Inject(MAT_DIALOG_DATA) public editData: any,
              private dialogRef: MatDialogRef<DialogTeacherComponent>) {
  }

  ngOnInit(): void {
    this.getAllSubjects();
    this.teacherForm = this.formBuilder.group({
      teacherName: ['', Validators.required],
      taughtSubject: ['', Validators.required],
    })
    if (this.editData) {
      this.actionBtn = "Update";
      this.teacherForm.controls['teacherName'].setValue((this.editData.teacherName));
      this.teacherForm.controls['taughtSubject'].setValue((this.editData.taughtSubject));
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

  addTeacher() {
    if (!this.editData) {
      if (this.teacherForm.valid) {
        this.service.addTeacher(this.teacherForm.value).subscribe({
          next: (res) => {
            alert("Subject added");
            this.teacherForm.reset();
            this.dialogRef.close('Saved');
          },
          error: () => {
            console.log(this.teacherForm.value);
            alert("Error");
          }
        });
      }
    } else {
      if (this.teacherForm.valid) {
        this.service.updateTeacher(this.teacherForm.value, this.editData.teacherId)
          .subscribe({
            next: (res) => {
              alert("Edit successful");
              this.teacherForm.reset();
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
