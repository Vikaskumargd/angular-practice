import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';

import { UserPost } from '../shared/user-post.model';
import { UserPostService } from '../shared/user-post.service';

import 'rxjs/add/operator/switchMap';
@Component({
    // tslint:disable-next-line:component-selector
    selector: 'post-detail',
    templateUrl: './post-detail.component.html'
})
export class PostDetailComponent implements OnInit {
    post: UserPost;
    constructor(private route: ActivatedRoute,
        private userPostService: UserPostService) { }

    ngOnInit() {
        this.route.params
            .switchMap((params: Params) => {

                return this.userPostService.getPost(+params['id']);
            })
            .subscribe(p => {
                this.post = p;
            });
    }


}
