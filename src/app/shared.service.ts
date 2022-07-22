import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from  'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "http://localhost:5238/api";
  readonly PhotoUrl = "http://localhost:5238/Photos";
  constructor(private http:HttpClient) { }

  getSubjectsList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/subjects');
  }

  addSubject(val:any){
    return this.http.post(this.APIUrl+'/subjects',val);
  }

  findSubject(val:any){
    return this.http.post(this.APIUrl+'/subjects/id',val);
  }

  updateSubject(val:any){
    return this.http.put(this.APIUrl+'/subjects',val);
  }

  deleteSubject(val:any){
    return this.http.delete(this.APIUrl+'/subjects',val);
  }

  uploadPhotoS(val:any){
    return this.http.post(this.APIUrl+'/subjects/SaveFile',val);
  }

  TeacherList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/teacher/list');
  }

  addTeacher(val:any){
    return this.http.post(this.APIUrl+'/teacher',val);
  }

  findTeacher(val:any){
    return this.http.post(this.APIUrl+'/teacher/id',val);
  }

  updateTeacher(val:any){
    return this.http.put(this.APIUrl+'/teacher',val);
  }

  deleteTeacher(val:any){
    return this.http.delete(this.APIUrl+'/teacher',val);
  }

  uploadPhotoT(val:any){
    return this.http.post(this.APIUrl+'/teacher/SaveFile',val);
  }

  groupBySubject():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/teacher/group');
  }

  getSchedule():Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/schedule/');
  }
}
