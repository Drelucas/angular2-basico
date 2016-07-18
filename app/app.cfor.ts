import {Component} from '@angular/core';

var TASKS = [
	{id: 1, name: 'Work'},
	{id: 2, name: 'Wash dishes'},
	{id: 3, name: 'Take dust'},
	{id: 4, name: 'Shopping'},
	{id: 5, name: 'Take care of kids'},
	{id: 6, name: 'Play game'},
	{id: 7, name: 'Have lunch'},
	{id: 8, name: 'Have a dinner'},
	{id: 9, name: 'Exercise'},
	{id: 10, name: 'Pay the bills'}
];

@Component({
	selector: 'my-app2',
	template: `
            <h1>{{ title }}</h1>
            <ul>
              <li *ngFor="let t of tasks">{{ t.name }}</li>
            </ul>
            `
})

export class AppCFor{
  title = "List of tasks";
  tasks = TASKS;
}
