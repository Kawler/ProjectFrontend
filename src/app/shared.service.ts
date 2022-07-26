import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from  'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "http://localhost:5238/api";
  constructor(private http:HttpClient) { }

  getSubjectsList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/subjects');
  }

  addSubject(val:any){
    return this.http.post(this.APIUrl+'/subjects',val);
  }

  updateSubject(val:any,id:number){
    return this.http.put(this.APIUrl+'/subjects/'+id,val);
  }

  deleteSubject(id:number){
    return this.http.delete(this.APIUrl+'/subjects/'+id);
  }

  TeacherList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/teacher/list');
  }

  addTeacher(val:any){
    return this.http.post(this.APIUrl+'/teacher',val);
  }

  updateTeacher(val:any,id:number){
    return this.http.put(this.APIUrl+'/teacher/'+id,val);
  }

  deleteTeacher(id:number){
    return this.http.delete(this.APIUrl+'/teacher/'+id);
  }

  getSchedule():Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/schedule/list');
  }

  addSchedule(val:any){
    return this.http.post(this.APIUrl+'/schedule',val);
  }

  updateSchedule(val:any,id:number){
    return this.http.put(this.APIUrl+'/schedule/'+id,val);
  }

  deleteSchedule(id:number){
    return this.http.delete(this.APIUrl+'/schedule/'+id);
  }
}
