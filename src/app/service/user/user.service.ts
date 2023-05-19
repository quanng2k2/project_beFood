import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iuser } from 'src/app/model/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpclient:HttpClient
  ) { }

  urlApi_user = "https://json-server-mu.vercel.app/api/users";
  urlApi = "https://json-server-mu.vercel.app/api";

  signup(users: any):Observable<Iuser>{
    return this.httpclient.post<Iuser>(`${this.urlApi}/signup`, users)
  }

  signin(users: any):Observable<any>{
    return this.httpclient.post<any>(`${this.urlApi}/signin`, users)
  }
}


/*test git*/