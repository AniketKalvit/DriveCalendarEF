import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as api from '../apiUrls';
import { Observable } from 'rxjs';
import { Drives } from '../Models/Drives';
@Injectable({
  providedIn: 'root'
})
export class DrivesService {

  constructor(private http:HttpClient) { }

 public getUsers():Observable<any>
 {
  return this.http.get<any>(api.getUsersbyRolePE);
 }
 
 public postAddDrive(drive:Drives):Observable<any>{
  let headers = new HttpHeaders()
  headers=headers.append('content-type','application/json');
  return this.http.post<any>(api.postAddDrive,drive,{headers:headers});
 }
 public postUpdateDrive(drive:any):Observable<any>{
  let headers = new HttpHeaders()
  headers=headers.append('content-type','application/json');
  return this.http.put<any>(api.postUpdateDrive,drive,{headers:headers});
 }
 public deleteDrive(id:number):Observable<any>{
  let headers = new HttpHeaders()
  headers=headers.append('content-type','application/json');
  return this.http.delete<any>(api.deleteDrive+id);
 }
 public getAllDrives():Observable<any>
 {
  let headers = new HttpHeaders()
    headers=headers.append('content-type','application/json');
  return this.http.get<any>(api.getAllDrives,{headers:headers});
 }
 public getAllDriveStatus():Observable<any>
 {
  let headers = new HttpHeaders()
    headers=headers.append('content-type','application/json');
  return this.http.get<any>(api.getAllDriveStatus,{headers:headers});
 }
}
