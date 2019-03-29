// Main
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

// NGRX
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

// Pages
import { 
  AboutModule, 
  BlogModule, 
  HomeModule, 
  NotFoundModule, 
  ProjectsModule, 
  SandboxModule } from './modules';

// Services
import { NavigationService } from './core/services/navigation/navigation.service';

// Components
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
    ProjectsModule,
    SandboxModule,
    NotFoundModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [
    NavigationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
