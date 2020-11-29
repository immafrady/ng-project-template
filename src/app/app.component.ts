import { Component } from '@angular/core';
import { DemoStructure } from '@resource/structure';

@Component({
  selector: 'app-root',
  template: '<h1>Hello World</h1>'
})
export class AppComponent {
  title = 'ng-project-template';
  // 结构的用法
  list: DemoStructure[];
}
