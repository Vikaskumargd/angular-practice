import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


import { Comment } from './comment.model';
import { commentApiUrl } from '../../../shared/app-config';
@Injectable()
export class CommentService {

    constructor(private http: Http) { }

    getComments(postId: number) {
        return this.http
            .get(commentApiUrl + '?postId=' + postId)
            .map(c => c.json() as Comment[]);
    }
}
