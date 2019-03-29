import { Component, OnInit } from '@angular/core';
import { NavigationService } from '@bigfoot-core/services';
import { PageComponent } from '@bigfoot-shared/components';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.sass']
})
export class SandboxComponent extends PageComponent implements OnInit {

  constructor(private navService: NavigationService) { 
    super('Sandbox Environment - Testing', navService);
  }

  ngOnInit() {
  }

}
