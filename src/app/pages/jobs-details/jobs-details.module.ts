import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsDetailsRoutingModule } from './jobs-details-routing.module';
import { JobsDetailsComponent } from './jobs-details.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module'; 


@NgModule({
  declarations: [
    JobsDetailsComponent
  ],
  imports: [
    CommonModule,
    JobsDetailsRoutingModule,
    SharedModuleModule
  ]
})
export class JobsDetailsModule { }
