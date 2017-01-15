import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <h1>{{heading}}</h1>
        <a routerLink="/post">Posts</a>
        <a routerLink="/user">Users</a>
        <router-outlet></router-outlet>
       
    `,
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    heading: string = 'Hello World';
}
