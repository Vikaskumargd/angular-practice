import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

// models
import { User } from './user.model';

import { userApiUrl } from '../../shared/app-config';

@Injectable()
export class UserService {

    constructor(private http: Http) { }

    getUsers() {
        return this.http.get(userApiUrl)
            .map((res: Response) => res.json() as User[]);
    }

}
