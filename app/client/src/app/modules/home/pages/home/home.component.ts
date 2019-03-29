import { Component, OnInit } from '@angular/core';
import { NavigationService } from '@bigfoot-core/services';
import { PageComponent } from '@bigfoot-shared/components';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent extends PageComponent implements OnInit {

  constructor(private navService: NavigationService) { 
    super('Home', navService);
  }

  ngOnInit() {
  }

}
