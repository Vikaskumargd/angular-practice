import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { Comment } from '../shared/comment/comment.model';
import { CommentService } from '../shared/comment/comment.service';

@Component({

    // tslint:disable-next-line:component-selector
    selector: 'comment-list',
    templateUrl: './comment-list.component.html'
})
export class CommentListComponent implements OnInit, OnChanges {
    @Input() postId: number;
    comments: Comment[];
    constructor(private commentService: CommentService) { }

    ngOnInit() {

        this.getComments();
    }

    ngOnChanges() {

        this.getComments();
    }

    getComments() {
        if (this.postId === null) {
            return;
        }
        this.commentService.getComments(this.postId)
            .subscribe(c => {

                this.comments = c;
            });
    }
}
