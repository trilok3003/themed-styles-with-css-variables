import { Component, Renderer2, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  constructor(public renderer: Renderer2) {}
  setDarkTheme() {
    this.renderer.removeClass(document.body, 'light-theme');
    this.renderer.addClass(document.body, 'dark-theme');
  }
  setLightTheme() {
    this.renderer.removeClass(document.body, 'dark-theme');
    this.renderer.addClass(document.body, 'light-theme');
  }
}
