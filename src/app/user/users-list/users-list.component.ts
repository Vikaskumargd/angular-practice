import { Component, OnInit } from '@angular/core';

import { User } from '../shared/user.model';

import { UserService } from '../shared/user.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'users-list',
    templateUrl: './users-list.component.html'
})
export class UsersListComponent implements OnInit {
    users: User[];

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.getUsers();
    }

    getUsers() {
        this.userService.getUsers()
            .subscribe((res) => {
                this.users = res;
            });
    }



}
