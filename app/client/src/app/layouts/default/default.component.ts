import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subject } from 'rxjs';
import { config } from '../../core/config';
import { filter } from 'rxjs/operators';
import { NavigationService } from '../../core/services/navigation/navigation.service';
import { MatDrawer } from '@angular/material';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.sass']
})
export class DefaultComponent implements OnInit {

  pageTitle: string;
  activeLink  = '';
  active$     = new Subject();
  links       = config.NAV_ROUTES;
  loading     = false;

  @ViewChild('sidenav') sideNavigation: MatDrawer;

  constructor(
    private router: Router,
    private navigationService: NavigationService
  ) { 
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(event => this.active$.next(this.router.url.split('/')[1]));

    this.navigationService.title$.subscribe(title => { 
      this.pageTitle = title;
    });
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.navigationService.sideNav = this.sideNavigation;
  }

  toggleSidenav(): void {
    this.navigationService.sideNav.toggle();
  }

}
