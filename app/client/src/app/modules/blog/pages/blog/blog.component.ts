import { Component, OnInit } from '@angular/core';
import { NavigationService } from '@bigfoot-core/services';
import { PageComponent } from '@bigfoot-shared/components';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.sass']
})
export class BlogComponent extends PageComponent implements OnInit {

  constructor(private navService: NavigationService) { 
    super('Blog', navService);
  }

  ngOnInit() {
  }

}
