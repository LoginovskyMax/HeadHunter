import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { FetchService } from 'src/app/fetch.service';
import { ServerResponse } from 'src/app/server-response';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  vacations: Observable<ServerResponse[]> = of([])

  serverEror = false

  constructor(public fetchService: FetchService, private router: Router) {}

  ngOnInit(): void{
    this.vacations = this.fetchService.getVacations();
    this.fetchService.getVacations().subscribe({
      error: (e) => {
        console.error(e);
        this.serverEror = true;
      },
    });
  }

  goToDetails(id: number|undefined) {
    if (id) {
      this.router.navigate([`job/${id}`]);
    }
  }
}
