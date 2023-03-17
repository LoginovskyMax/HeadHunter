import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddVacationRoutingModule } from './add-vacation-routing.module';
import { AddVacationComponent } from './add-vacation.component';


@NgModule({
  declarations: [
    AddVacationComponent
  ],
  imports: [
    CommonModule,
    AddVacationRoutingModule
  ]
})
export class AddVacationModule { }
