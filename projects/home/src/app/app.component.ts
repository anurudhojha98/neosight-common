import { Component } from '@angular/core';

@Component({
  selector: 'home-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'home';

  userData(userObj) {
    console.log(userObj);
  }
}
