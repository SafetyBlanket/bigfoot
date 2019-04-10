import { Component, OnDestroy } from '@angular/core';
import { NavigationService } from '../../../core/services';

@Component({ template: 'No Template!' })
export class PageComponent implements OnDestroy {
  loading = false;

  /*
   * @param title Title of page component to be displayed in title bar.
   * @param navigationService Service to update page heading.
   */
  constructor( title: string, protected navigationService: NavigationService 
    ) { this.title = title }

  ngOnDestroy() { this.loading = false }

  /*
   * @param title Update title bar at top of page
   */
  protected set title(title: string) {
    this.navigationService.title$.next(title);
  }

}
