import { Component, OnInit } from '@angular/core';
import { NavigationService } from '@bigfoot-core/services';
import { PageComponent } from '@bigfoot-shared/components'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent extends PageComponent implements OnInit {

  constructor(private navService: NavigationService) { 
    super('Administrator Console', navService);
  }

  ngOnInit() {
  }

}
