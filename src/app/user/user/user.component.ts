import { Component, OnInit, Input } from '@angular/core';

@Component({

    // tslint:disable-next-line:component-selector
    selector: 'single-user',
    templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
    @Input() user;
    constructor() { }

    ngOnInit() { }
}
