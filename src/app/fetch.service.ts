import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ServerResponse } from './server-response';

@Injectable({
  providedIn: 'root'
})
export class FetchService {
  hostName = "http://localhost:3000/jobs"

  constructor(private http:HttpClient) { }

  getVacations():Observable<ServerResponse[]>{
     return this.http.get<ServerResponse[]>(this.hostName)
  }

  getOneVacation(id:number):Observable<ServerResponse>{
    return this.http.get<ServerResponse>(`${this.hostName}/${id}`)
 }

 deleteOneVacation(id:number):void{
  this.http.delete(`${this.hostName}/${id}`)
 }

 changeOneVacation(obj:ServerResponse):void{
  console.log(obj);
 this.http.put(`${this.hostName}/${obj.id}`,obj).subscribe((data)=>console.log(data))
 }
  
  addVacantion(obj:ServerResponse){
    delete obj.id
    console.log(obj);
    
     this.http.post<ServerResponse>(this.hostName,obj).subscribe()
  }
}
