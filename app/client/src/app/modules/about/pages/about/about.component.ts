import { Component, OnInit } from '@angular/core';
import { NavigationService } from '@bigfoot-core/services';
import { PageComponent } from '@bigfoot-shared/components';
import { Education, Institution, WorkHistory} from '@bigfoot-shared/models'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent extends PageComponent implements OnInit {

  private education = Education;
  private experience = WorkHistory;

  constructor( private navService: NavigationService ) { 
    super('About', navService);
  }

  ngOnInit() {
  }

}
