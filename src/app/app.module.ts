import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { UserPostComponent } from './post/user-post/user-post.component';
import { UserPostService } from './post/shared/user-post.service';
import { PostDetailComponent } from './post/post-details/post-detail.component';
import { CommentListComponent } from './post/comment-list/comment-list.component';
import { CommentComponent } from './post/comment/comment.component';
import { CommentService } from './post/shared/comment/comment.service';


const routes: Routes = [
    {

        path: 'post',
        children: [
            {
                path: '',
                component: PostListComponent
            },
            {
                path: ':id',
                component: PostDetailComponent
            }
        ]

    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/post'
    }
];


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [
        AppComponent,
        PostListComponent,
        UserPostComponent,
        PostDetailComponent,
        CommentListComponent,
        CommentComponent
    ],
    providers: [
        UserPostService,
        CommentService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
