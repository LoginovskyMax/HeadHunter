import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FetchService } from 'src/app/fetch.service';
import { ServerResponse } from 'src/app/server-response';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  vacations:Observable<ServerResponse[]> = of([])
  
  constructor(public fetchService:FetchService){}

  show(){
    this.fetchService.postVacantions().subscribe(
      ( data:ServerResponse[])=>{
            console.log(data);
          }
    )
  }
 
  ngOnInit():void{
    this.vacations = this.fetchService.getVacations()
    this.fetchService.getVacations().subscribe();
  }
}
