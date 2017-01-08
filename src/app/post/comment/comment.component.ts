import { Component, OnInit, Input } from '@angular/core';

import { CommentService } from '../shared/comment/comment.service';
import { Comment } from '../shared/comment/comment.model';
@Component({
    // tslint:disable-next-line:component-selector
    selector: 'post-comment',
    templateUrl: './comment.component.html'
})
export class CommentComponent implements OnInit {
    @Input() comment: Comment;
    constructor() { }

    ngOnInit() { }
}
