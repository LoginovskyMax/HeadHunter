import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddVacationRoutingModule } from './add-vacation-routing.module';
import { AddVacationComponent } from './add-vacation.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';

@NgModule({
  declarations: [
    AddVacationComponent,
  ],
  imports: [
    CommonModule,
    AddVacationRoutingModule,
    SharedModuleModule,
  ],
})
export class AddVacationModule { }
