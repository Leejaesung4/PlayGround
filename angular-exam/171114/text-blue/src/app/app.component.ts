import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1 textBlue>Hello</h1>
  <h1 [textColor]="color">Text Color</h1>
  `
})
export class AppComponent { 
  color = 'red';
}