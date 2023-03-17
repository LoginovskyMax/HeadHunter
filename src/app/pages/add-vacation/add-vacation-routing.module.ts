import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVacationComponent } from './add-vacation.component';

const routes: Routes = [{ path: '', component: AddVacationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddVacationRoutingModule { }
