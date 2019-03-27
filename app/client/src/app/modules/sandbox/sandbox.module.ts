import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../../shared/material.module';
import { SandboxRoutingComponent } from './sandbox.routes';

import { SandboxComponent } from './pages/sandbox/sandbox.component';

@NgModule({
  declarations: [SandboxComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    SandboxRoutingComponent
  ]
})
export class SandboxModule { }
