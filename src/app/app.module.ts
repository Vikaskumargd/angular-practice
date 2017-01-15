import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// custom modules
import { AppRoutingModule, routableComponents } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { CommentComponent } from './post/comment/comment.component';
import { CommentListComponent } from './post/comment-list/comment-list.component';
import { UserPostComponent } from './post/user-post/user-post.component';
import { UserComponent } from './user/user/user.component';
// services
import { CommentService } from './post/shared/comment/comment.service';
import { UserPostService } from './post/shared/user-post.service';
import { UserService } from './user/shared/user.service';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        CommentListComponent,
        CommentComponent,
        UserPostComponent,
        UserComponent,
        routableComponents
    ],
    providers: [
        UserPostService,
        CommentService,
        UserService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }

