import {Component} from '@angular/core';

@Component({
	selector: 'my-app',
	template: `
            <h1>{{ title }}</h1>
            <input type= "text" value ="{{ title }}"/>
            <input type= "text" [(ngModel)]="title" />
            `
})

export class AppComponent{
  title= "André Lucas"
}
