import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
// import { Observable } from 'rxjs';

import { UserPost } from '../shared/user-post.model';
import { postApiUrl } from '../../shared/app-config';


@Injectable()
export class UserPostService {
    // const postUrl: string = "asa";
    constructor(private http: Http) { }

    getPostList() {
        return this.http.get(postApiUrl).map(res => res.json() as UserPost[]);
    }

    getPost(id: number) {
        return this.http.get(postApiUrl + id).map(res => res.json() as UserPost);
    }

}
