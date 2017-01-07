import { Component, Input } from '@angular/core';

import { UserPost } from '../shared/user-post.model';
@Component({
    // tslint:disable-next-line:component-selector
    selector: 'user-post',
    templateUrl: './user-post.component.html'
})
export class UserPostComponent {
    @Input() post: UserPost;
}
