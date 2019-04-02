import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { ContentContainerDirective } from './directives';

@NgModule({
  declarations: [
    ContentContainerDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    ContentContainerDirective
  ]
})
export class SharedModule { }
