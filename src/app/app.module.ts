import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { UserPostComponent } from './post/user-post/user-post.component';
import { UserPostService } from './post/shared/user-post.service';
@NgModule({
    imports: [
        BrowserModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        PostListComponent,
        UserPostComponent
    ],
    providers: [
        UserPostService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
