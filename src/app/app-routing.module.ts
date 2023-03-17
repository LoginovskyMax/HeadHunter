import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {path: '',redirectTo:'jobs',pathMatch:"full"},
  {path: 'jobs',component: MainPageComponent},
  { path: 'job/:id', loadChildren: () => import('./pages/jobs-details/jobs-details.module').then(m => m.JobsDetailsModule) },
  { path: 'jobs/new', loadChildren: () => import('./pages/add-vacation/add-vacation.module').then(m => m.AddVacationModule) },
  {path: '**',component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
