import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import * as apiUrl from '../apiUrls';
@Injectable({
    providedIn:'root'
})
export class LoginService{
    constructor(private http:HttpClient){

    }

    public postUserLogin(user:any):Observable<any>{
        let headers = new HttpHeaders()
    headers=headers.append('content-type','application/json');
        return this.http.post<any>(apiUrl.userLogin,user,{headers:headers});
    }
}