import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateResumeComponent } from './create-resume/create-resume.component';

const routes: Routes = [
  { path: 'createresume', component: CreateResumeComponent },
  { path: '', redirectTo: '/createresume', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
