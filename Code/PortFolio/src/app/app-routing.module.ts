import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { CourseComponent } from './course/course.component';
import { AboutComponent } from './about/about.component';

const routes: Routes =
[
  { path:'', component:AboutComponent },
  { path:'about', component:AboutComponent },
  { path:'projects', component:ProjectsComponent },
  { path:'course', component:CourseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
