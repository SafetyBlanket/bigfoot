import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { ProjectsRoutingModule } from './projects.routes';

import { ProjectsComponent } from './pages/projects/projects.component';

@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
