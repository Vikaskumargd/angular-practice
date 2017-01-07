import { Component, OnInit } from '@angular/core';

import { UserPost } from '../shared/user-post.model';
import { UserPostService } from '../shared/user-post.service';
@Component({
   
    // tslint:disable-next-line:component-selector
    selector: 'post-list',
    templateUrl: './post-list.component.html'
})
export class PostListComponent implements OnInit {
    posts: UserPost[];
    constructor(private userPostService: UserPostService) { }

    ngOnInit() {
        this.getPosts();
    }

    getPosts(): void {
        this.userPostService.getPost()
            .subscribe(u => {
                this.posts = u;
            });
    }
}
