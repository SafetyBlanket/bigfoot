import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { MatDrawer } from '@angular/material';
import { CONFIG } from '@bigfoot-core/config';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  public windowTitle$: BehaviorSubject<string>;
  public appTitle$: BehaviorSubject<string>;
  public title$: BehaviorSubject<string>; 
  public sideNav: MatDrawer; 

  constructor(private router: Router) { 
    this.windowTitle$ = new BehaviorSubject(CONFIG.WINDOW_TITLE);
    this.appTitle$ = new BehaviorSubject(CONFIG.APP_NAME);
    this.title$ = new BehaviorSubject(CONFIG.APP_NAME);

    this.windowTitle$.subscribe(title =>  document.title = title );
  }

  set windowTitle(title: string) {
    this.windowTitle$.next(title);
  }

  get windowTitle(): string {
    return this.windowTitle$.getValue();
  }

  set appTitle(title: string) {
    this.appTitle$.next(title);
  }

  get appTitle() {
    return this.appTitle$.getValue();
  }

  set title(title: string) {
    this.title$.next(title);
  }

  get title() {
    return this.title$.getValue();
  }

}
