/**
 * @author Temur Mahmudov
 */
import {Component, OnInit} from 'angular2/core';
import {PostService} from './post.service';
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
    selector: 'posts',
    template: ``,
    providers: [PostService, HTTP_PROVIDERS]
    
})
export class PostComponent implements OnInit {
    isLoaded = true;

    constructor(private postService: PostService) {
        /*this.postService.createPost({
            userId: 1, 
            title: "a",
            body: "b"
        })*/
    }

    ngOnInit(){
        this.postService.getPost()
            .subscribe(posts =>console.log(posts[0]));
    }
}

