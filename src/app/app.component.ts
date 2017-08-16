import { Component } from '@angular/core';
import './utils/tableau-initialization';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public fakeId: number;
  constructor() {
    this.fakeId = 23;
  }
}
