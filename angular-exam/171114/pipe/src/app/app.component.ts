import { Component } from '@angular/core';
import { Observable } from 'rxjs/rx';


@Component({
  selector: 'app-root',
  template: `
  <select [(ngModel)]="status">
    <option *ngFor="let item of navItems">{{item}}</option>
  </select>
  
  <ul>
    <li *ngFor="let todo of todos | todoFilter : status">{{todo.content}}</li>
  </ul>
  `
})
export class AppComponent {
  todos = [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'JavaScript', completed: false }
  ];
  
  navItems = ['All', 'Active', 'Completed'];
  status = 'All';
}
