import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subject } from 'rxjs';
import { CONFIG } from '@bigfoot-core/config'
import { filter } from 'rxjs/operators';
import { NavigationService } from '@bigfoot-core/services';
import { MatDrawer, MatRipple } from '@angular/material';
import { TweenMax } from 'gsap';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  
  @ViewChild('sidenav') sideNavigation: MatDrawer;
  @ViewChild(MatRipple) titleRipple: MatRipple;

  appTitle: string = '';
  pageTitle: string;
  activeLink = '';
  active$ = new Subject();
  links = CONFIG.NAV_ROUTES;

  constructor(
    private router: Router,
    private navigationService: NavigationService ) { 
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(event => {
        this.active$.next(this.router.url.split('/')[1]);
        this.titleRipple.launch({});
      });

    // Update titlebar
    this.navigationService.title$.subscribe(title => { 
      this.pageTitle = title;
    });

    // Update application title
    this.navigationService.appTitle$.subscribe(title => {
      this.appTitle = title;
    });
  }

  ngOnInit() {
  }

  get title(): string {
    return this.appTitle ;
  }

  ngAfterViewInit(): void {
    // Navigation service setup
    this.navigationService.sideNav = this.sideNavigation;
    this.navigationService.sideNav.openedStart.subscribe(_ => 
      TweenMax.to(document.getElementById('drawerStatus'), .25, { rotation: 180 })
    );
    this.navigationService.sideNav.closedStart.subscribe(_ => 
      TweenMax.to(document.getElementById('drawerStatus'), .25, { rotation: 0 })    
    );
  }

  toggleSidenav(): void {
    this.navigationService.sideNav.toggle();
  }

}
