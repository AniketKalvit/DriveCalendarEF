import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import * as api from "../apiUrls";
import { Student } from "../Models/Student";
@Injectable({
    providedIn:'root'
})
export class StudentService{
constructor(private http:HttpClient){}

public getStudentList():Observable<any>{
    return this.http.get<any>(api.getAllStudents);
}
public postAddDrive(stud:Student):Observable<any>{
    let headers = new HttpHeaders()
    headers=headers.append('content-type','application/json');
    return this.http.post<any>(api.postAddStudent,stud,{headers:headers});
   }
}