import { Component, OnInit,ViewChild } from '@angular/core';
import { SharedService } from "../../shared.service";
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogTeacherComponent} from "../../../app/teacher/dialog-teacher/dialog-teacher.component";
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-show-tea',
  templateUrl: './show-tea.component.html',
  styleUrls: ['./show-tea.component.css']
})
export class ShowTeaComponent implements OnInit {
  displayedColumns: string[] = ['teacherId', 'teacherName', 'taughtSubject','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private service:SharedService,private dialog:MatDialog) {
  }
  SubjectsList:any = [];
  openDialog() {
    this.dialog.open(DialogTeacherComponent, {
      width:'15%'
    }).afterClosed().subscribe(val=>{
      if(val === 'Saved'){
        this.getAllTeachers();
      }
    });
  }

  ngOnInit(): void {
    this.getAllTeachers();
  }

  getAllTeachers(){
    this.service.TeacherList().subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error:(err)=>{
        alert("error while getting data from database");
      }
    })
  }

  editTeacher(row: any){
    this.dialog.open(DialogTeacherComponent,{
      width:'15%',
      data:row
    }).afterClosed().subscribe(val=>{
      if(val === 'update'){
        this.getAllTeachers();
      }
    });
  }

  deleteTeacher(id:number){
    this.service.deleteTeacher(id).subscribe({
      next:(res) =>{
        alert("Deleted successfully");
        this.getAllTeachers();
      },
      error:()=>{
        alert("Error while deleting");
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
