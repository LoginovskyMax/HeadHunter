import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-vacation',
  templateUrl: './add-vacation.component.html',
  styleUrls: ['./add-vacation.component.scss']
})
export class AddVacationComponent implements OnInit {
  date = new Date()
  
  vakancy = {
    id: Date.now(),
    job_number: "411-AKJ",
    job_title: "Category",
    job_start_date: this.date.toUTCString(),
    job_close_date: "",
    experience_required: true,
    number_of_openings: 1,
    job_notes: ""
  }
  constructor() { }

  ngOnInit(): void {
  }

}
