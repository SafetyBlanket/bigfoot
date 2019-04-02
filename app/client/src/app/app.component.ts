import { Component } from '@angular/core';
import { CONFIG } from '@bigfoot-core/config';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = CONFIG.WINDOW_TITLE;
}
