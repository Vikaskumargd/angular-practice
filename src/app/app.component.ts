import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <h1>{{heading}}</h1>
        <post-list></post-list>
    `,
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    heading: string = 'Hello World';
}
