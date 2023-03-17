import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FetchService } from '../fetch.service';
import { ServerResponse } from '../server-response';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnChanges{
  form:FormGroup;
  @Input() vakancy:ServerResponse|null = null

  constructor( public fetchService:FetchService, private router:Router) {
    console.log(this.vakancy);
    this.form = new FormGroup({
      "title" : new FormControl("", Validators.required),
      "notes" : new FormControl("", Validators.required),
    })
   }
   ngOnChanges(): void {
    this.form.controls['title'].setValue(this.vakancy?.job_title)
    this.form.controls['notes'].setValue(this.vakancy?.job_notes)
   }
  
  
   submit(){
    console.log("yes");
    if(this.vakancy!==null){
      let obj = {...this.vakancy}
      obj.job_title = this.form.controls['title'].value
      obj.job_notes = this.form.controls['notes'].value
      this.fetchService.changeOneVacation(obj)
      this.router.navigate(['jobs'])
    }
    
  
   }
}