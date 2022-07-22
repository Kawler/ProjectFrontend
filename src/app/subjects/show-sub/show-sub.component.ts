import { Component, OnInit } from '@angular/core';
import { SharedService } from "../../shared.service";
import {HttpClient} from "@angular/common/http";
export class Subject{
  constructor(
    public subjectId : number,
    public classroom : number,
    public subjectName : string,
    public photoFile : string
  ) {
  }
}

@Component({
  selector: 'app-show-sub',
  templateUrl: './show-sub.component.html',
  styleUrls: ['./show-sub.component.css']
})
export class ShowSubComponent implements OnInit {

  constructor(private service:SharedService,private httpClient:HttpClient) {
  }
  SubjectsList:any = [];


  ngOnInit(): void {
    this.refreshSubjectsList(),
    this.getData()
  }

  refreshSubjectsList(){
    this.service.getSubjectsList().subscribe(data=>{
      this.SubjectsList = data;
    });
  }
  getData(){
    let url = "http://localhost:5238/api/subjects";
    return this.httpClient.get(url).subscribe((result:any)=>{
      this.SubjectsList = result;
    })
  }
}

