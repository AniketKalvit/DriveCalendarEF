import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import * as api from "../apiUrls";
@Injectable({
    providedIn:'root'
})
export class StudentDriveService{

    constructor(private http:HttpClient){}

    public getStudentDriveStatus():Observable<any>{
        return this.http.get<any>(api.getAllStudentDriveStatus);
    }
    public getStudentDrives():Observable<any>{
        return this.http.get<any>(api.getAllStudentDrives);
    }

    public postApplyToDrive(studentDrive:any):Observable<any>{
        let headers = new HttpHeaders()
        headers=headers.append('content-type','application/json');
        return this.http.post<any>(api.postApplyToDrive,studentDrive,{headers:headers});
       }
       public updateStudentDrive(studentDrive:any):Observable<any>{
        let headers = new HttpHeaders()
        headers=headers.append('content-type','application/json');
        return this.http.put<any>(api.updateStudentDrive,studentDrive,{headers:headers});
       }
       public deleteStudentDrive(id:number):Observable<any>{
        let headers = new HttpHeaders()
        headers=headers.append('content-type','application/json');
        return this.http.delete<any>(api.deleteStudentDrive+id,{headers:headers});
       }
}