import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { NotFoundRoutingModule } from './not-found.routes';

import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    CommonModule,
    SharedModule,
    NotFoundRoutingModule
  ]
})
export class NotFoundModule { }
