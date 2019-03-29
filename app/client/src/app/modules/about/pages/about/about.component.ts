import { Component, OnInit } from '@angular/core';
import { NavigationService } from '@bigfoot-core/services';
import { PageComponent } from '@bigfoot-shared/components';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent extends PageComponent implements OnInit {

  constructor( private navService: NavigationService ) { 
    super('About', navService);
  }

  ngOnInit() {
  }

}
