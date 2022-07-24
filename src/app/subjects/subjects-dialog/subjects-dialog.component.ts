import { Component,Inject, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { SharedService } from "../../shared.service";
import {MatDialogRef,MAT_DIALOG_DATA} from "@angular/material/dialog"

@Component({
  selector: 'app-subjects-dialog',
  templateUrl: './subjects-dialog.component.html',
  styleUrls: ['./subjects-dialog.component.css']
})
export class SubjectsDialogComponent implements OnInit {
  subjectForm !: FormGroup;
  actionBtn : string = "Save";
  constructor(private formBuilder : FormBuilder,
              private service:SharedService,
              @Inject(MAT_DIALOG_DATA) public editData:any,
              private dialogRef : MatDialogRef<SubjectsDialogComponent>) { }
  ngOnInit(): void {
    this.subjectForm = this.formBuilder.group({
      subjectName : ['',Validators.required],
      classroom : ['',Validators.required],
    })
    if(this.editData){
      this.actionBtn = "Update";
      this.subjectForm.controls['subjectName'].setValue((this.editData.subjectName));
      this.subjectForm.controls['classroom'].setValue((this.editData.classroom));
    }
  }
  addSubject(){
    if(!this.editData){
      if (this.subjectForm.valid){
        this.service.addSubject(this.subjectForm.value).subscribe({
          next:(res)=>{
            alert("Subject added")
            this.subjectForm.reset();
            this.dialogRef.close('Saved');
          },
          error:()=>{
            alert("Error")
          }
        });
      }
    } else {
      if (this.subjectForm.valid) {
        this.service.updateSubject(this.subjectForm.value,this.editData.subjectId)
          .subscribe({next:(res)=>{
              alert("Edit successful");
              this.subjectForm.reset();
              this.dialogRef.close('update');
            },
            error:()=>{
              alert("Error during update");
            }
          });
      }
    }
  }
}
