import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ServerResponse } from './server-response';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(private http:HttpClient) { }

  getVacations():Observable<ServerResponse[]>{
     return this.http.get<ServerResponse[]>('http://localhost:3000/jobs')
  }
  
  postVacantions():Observable<ServerResponse[]>{
    const body={
      name:'Karina',
      job:'Director'
    }
    return this.http.post<ServerResponse[]>('http://localhost:3000/jobs',body)
  }
}
