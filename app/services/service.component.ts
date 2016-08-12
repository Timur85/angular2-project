/**
 * @author Temur Mahmudov
 */
import {Component, OnInit} from 'angular2/core'
import {PostService} from './post.service';
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
    selector: 'services',
    template: `
         
    `,
    providers: [PostService, HTTP_PROVIDERS]
})
export class ServiceComponent implements OnInit{
    constructor(private _postService: PostService){
       
    }
    
    ngOnInit(){
         this._postService.getPosts()
            .subscribe(posts => console.log(posts));
    }
    
   
}