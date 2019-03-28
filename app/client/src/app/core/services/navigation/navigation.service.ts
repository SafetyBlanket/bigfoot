import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MatSidenav, MatDrawer } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  public title$ = new Subject<string>(); // Page Title
  public sideNav: MatDrawer; // Reference to drawer in layout.

  constructor() { }

}
