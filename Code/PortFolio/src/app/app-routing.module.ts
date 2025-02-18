import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { CourseComponent } from './course/course.component';

const routes: Routes =
[
  { path:'projects', component:ProjectsComponent },
  { path:'course', component:CourseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
