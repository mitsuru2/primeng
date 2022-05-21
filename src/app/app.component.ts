import { ApplicationRef, Component } from '@angular/core';

enum TestEnum {
  Apple = 0,
  Orrange,
  Grapefruits,
}

type TTestType = {
  id: string;
  name: string;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = '';

  upper() {
    var tmp = 0;
    this.title = this.title.toUpperCase();
  }
}
