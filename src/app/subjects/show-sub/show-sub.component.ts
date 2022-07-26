import { Component, OnInit,ViewChild } from '@angular/core';
import { SharedService } from "../../shared.service";
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {SubjectsDialogComponent} from "../subjects-dialog/subjects-dialog.component";
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-show-sub',
  templateUrl: './show-sub.component.html',
  styleUrls: ['./show-sub.component.css']
})
export class ShowSubComponent implements OnInit {
  displayedColumns: string[] = ['subjectId', 'subjectName', 'classroom','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private service:SharedService,private dialog:MatDialog) {
  }
  SubjectsList:any = [];
  openDialog() {
    this.dialog.open(SubjectsDialogComponent, {
      width:'15%'
    }).afterClosed().subscribe(val=>{
      if(val === 'Saved'){
        this.getAllSubjects();
      }
    });
  }

  ngOnInit(): void {
    this.getAllSubjects();
  }

  getAllSubjects(){
    this.service.getSubjectsList().subscribe({
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

  editSubject(row: any){
    this.dialog.open(SubjectsDialogComponent,{
      width:'15%',
      data:row
    }).afterClosed().subscribe(val=>{
      if(val === 'update'){
        this.getAllSubjects();
      }
    });
  }

  deleteSubject(id:number){
    this.service.deleteSubject(id).subscribe({
      next:(res) =>{
        alert("Deleted successfully");
        this.getAllSubjects();
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


