import { Component, OnInit, Input } from '@angular/core';
import { image } from '@bigfoot-shared/models';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit {

  @Input() avatar: image;
  @Input() title: string;
  @Input() subtitle: string;
  @Input() image: image;
  @Input() description: string;
  @Input() list: Array<string>;
  @Input() tags: Array<string>
  @Input() actions: Array<{ url: string; name: string }>;

  constructor() { 
  }

  ngOnInit() {
  }

}