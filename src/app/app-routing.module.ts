import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { PostListComponent } from './post/post-list/post-list.component';
import { PostDetailComponent } from './post/post-details/post-detail.component';



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
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }

export const routableComponents = [
    PostListComponent,
    PostDetailComponent

];

