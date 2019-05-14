import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-project de';

  public add(a: any, b: any) {
    return Number.parseInt(a) + Number.parseInt(b);
  }
  
  public sub(a: any, b: any) {
    return Number.parseInt(a.toString()) - Number.parseInt(b);
  }
}
