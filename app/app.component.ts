import {Component} from '@angular/core';

@Component({
	selector: 'my-app',
	template: `
            <h1>{{ title.name }}</h1>
            <input type= "text" [(ngModel)]="title.name"/>
		        <p>{{ title.description }}</p>
		        <p>{{ title }}</p>
            `
})

export class AppComponent{
  title = {
		name: "Lucas",
		"description": "Description Lucas"
	}
}
