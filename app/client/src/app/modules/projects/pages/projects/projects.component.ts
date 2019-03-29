import { Component, OnInit } from '@angular/core';
import { NavigationService } from '@bigfoot-core/services';
import { PageComponent } from '@bigfoot-shared/components';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent extends PageComponent implements OnInit {

  constructor(private navService: NavigationService) { 
    super('Projects', navService);
  }

  ngOnInit() {
  }

}
