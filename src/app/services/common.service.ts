import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }

  api='https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile'

  addUser(data:any):Observable<any>{
    return this.http.post(this.api,data)
  }

  getAllUsers():Observable<any>{
    return this.http.get(this.api)
  }

  deleteuser(id:number):Observable<any>{
    return this.http.delete(`${this.api}/${id}`)
  }

  edituser(id:any,data:any):Observable<any>{
    return this.http.put(`${this.api}/${id}`,data)
  }

}
