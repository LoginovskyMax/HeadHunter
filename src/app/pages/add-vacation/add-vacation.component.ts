import { Component } from '@angular/core';

@Component({
  selector: 'app-add-vacation',
  templateUrl: './add-vacation.component.html',
  styleUrls: ['./add-vacation.component.scss'],
})
export class AddVacationComponent {
  date = new Date()

  vakancy = {
    id: 0,
    job_number: '411-AKJ',
    job_title: '',
    job_start_date: this.date.toLocaleDateString(),
    job_close_date: new Date(this.date.setDate(this.date.getDate() + 7)).toLocaleDateString(),
    experience_required: true,
    number_of_openings: 1,
    job_notes: '',
  }
}
