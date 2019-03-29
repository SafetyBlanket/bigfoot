import { Component, OnDestroy } from '@angular/core';
import { NavigationService } from '../../../core/services';

@Component({ template: 'No Template!' })
export class PageComponent implements OnDestroy {
  loading = false;

  /**
   * @param title Title of page component to be displayed in title bar.
   * @param navigationService Service to update page heading.
   */
  constructor( 
    protected title: string,
    protected navigationService: NavigationService 
    ) { this.setTitle(title) }

  ngOnDestroy() { this.loading = false }

  /**
   * @param title Update title bar at top of page
   */
  private setTitle(title: string) { this.navigationService.title$.next(title) }
}
