import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FetchService } from '../../fetch.service';
import { ServerResponse } from '../../server-response';


@Component({
  selector: 'app-jobs-details',
  templateUrl: './jobs-details.component.html',
  styleUrls: ['./jobs-details.component.scss']
})
export class JobsDetailsComponent implements OnInit {
  id = 0
  showForm = false
  vacation:ServerResponse|null = null

  constructor(public fetchService:FetchService, private route:ActivatedRoute, private router:Router) {
    this.route.params.subscribe((params:Params)=>{
      this.id = params['id']
      this.fetchService.getOneVacation(this.id).subscribe((vacation:ServerResponse)=>{
        this.vacation = vacation
      })
  });
   }

  deleteVacantion(){
    this.fetchService.deleteOneVacation(this.id)
    this.router.navigate(['jobs'])
  }

  ngOnInit(): void {

  }

}
