import { Component, OnInit,ViewChild } from '@angular/core';
import { SharedService } from "../../shared.service";
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {ScheduleDialogComponent} from "../../schedule/schedule-dialog/schedule-dialog.component";

@Component({
  selector: 'app-show-schedule',
  templateUrl: './show-schedule.component.html',
  styleUrls: ['./show-schedule.component.css']
})
export class ShowScheduleComponent implements OnInit {
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['scheduleSubjectId','nameOfTheDay', 'classroom', 'subjectName','action'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private service:SharedService,private dialog:MatDialog) { }

  SubjectsList:any = [];

  openDialog() {
    this.dialog.open(ScheduleDialogComponent, {
      width:'15%'
    }).afterClosed().subscribe(val=>{
      if(val === 'Saved'){
        this.getSchedule();
      }
    });
  }

  ngOnInit(): void {
    this.getSchedule();
  }

  getSchedule(){
    this.service.getSchedule().subscribe({
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

  editSchedule(row: any){
    this.dialog.open(ScheduleDialogComponent,{
      width:'15%',
      data:row
    }).afterClosed().subscribe(val=>{
      if(val === 'update'){
        this.getSchedule();
      }
    });
  }

  deleteSchedule(id:number){
    console.log(id);
    this.service.deleteSchedule(id).subscribe({
      next:(res) =>{
        alert("Deleted successfully");
        this.getSchedule();
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
