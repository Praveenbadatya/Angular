import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { ProjectsComponent } from './projects/projects.component';
import { CourseComponent } from './course/course.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileDetailsComponent,
    ProjectsComponent,
    CourseComponent,
    AboutComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
