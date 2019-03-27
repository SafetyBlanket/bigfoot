import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { 
  AboutModule, 
  BlogModule, 
  HomeModule, 
  NotFoundModule, 
  ProjectsModule, 
  SandboxModule } from './modules';
import { AppComponent } from './app.component';
import { DefaultComponent } from './layouts/default/default.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    AboutModule,
    BlogModule,
    HomeModule,
    NotFoundModule,
    ProjectsModule,
    SandboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
