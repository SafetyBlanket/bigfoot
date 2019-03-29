import { Component, OnInit } from '@angular/core';
import { NavigationService } from '@bigfoot-core/services';
import { PageComponent } from '@bigfoot-shared/components';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.sass']
})
export class NotFoundComponent extends PageComponent implements OnInit {

  constructor(private navService: NavigationService) {
    super('Not Found', navService);
  }

  ngOnInit() {
  }

}
