import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import {  
  InfoCardComponent
} from './components';
import { 
  ContentContainerDirective, 
} from './directives';

@NgModule({
  declarations: [
    ContentContainerDirective,
    InfoCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    ContentContainerDirective,
    InfoCardComponent
  ]
})
export class SharedModule { }
