import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Users } from "../Models/Users";
import { Observable } from "rxjs";
import  * as apiUrl from '../apiUrls'; 
@Injectable({
    providedIn:'root',
})
export class RegisterService
{
    constructor(private http:HttpClient){

    }

    public postRegisterUser(user:any):Observable<any>{
        let headers = new HttpHeaders()
    headers=headers.append('content-type','application/json');
        return this.http.post<any>(apiUrl.register,user,{headers:headers});
    }
}